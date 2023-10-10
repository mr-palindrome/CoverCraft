
const apiKey = "api_key";
let userAbout = "";

const fetchUserAbout = () => {
    return new Promise((resolve) => {
        chrome.storage.sync.get(['userAbout'], function (result) {
            userAbout = result.userAbout || '';
            resolve(userAbout);
        });
    });
}

(() => {

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
      const { type, value, jobId } = obj;

      if (jobId) {
        currentJob = jobId;
        newJobLoaded();
      }
    });

    const attemptToGetJobDescription = (
      maxAttempts,
      currentAttempt,
      queryString,
      callbackType,
      callback
    ) => {
      if (currentAttempt > maxAttempts) {
        console.error("Max attempts reached. Job description element not found.");
        callback(null);
      }
      const jobDescriptionExists = document.querySelector(queryString);

      if (jobDescriptionExists) {
        if (callbackType === "innerText") {
          callback(jobDescriptionExists.innerText);
        } else {
          callback(jobDescriptionExists.parentElement);
        }
      } else {
        // Retry after a delay
        const retryDelay = 4000; // 2 seconds
        setTimeout(() => {
          attemptToGetJobDescription(
            maxAttempts,
            currentAttempt + 1,
            queryString,
            callbackType,
            callback
          );
        }, retryDelay);
      }
    };

    const newJobLoaded = async () => {
      const coverCraftBtn = document.createElement("img");

      coverCraftBtn.src = chrome.runtime.getURL("assets/logo_arrow.png");
      coverCraftBtn.className = "cCraft-button";
      coverCraftBtn.style = "width: 40px";
      // coverCraftBtn.height = "40px";
      coverCraftBtn.title = "Click to CoverCraft to generate the text!";

      // const devToInsert = document.querySelector('form textarea');
      attemptToGetJobDescription(
        10,
        1,
        "form textarea",
        "element",
        (devToInsert) => {
          devToInsert.appendChild(coverCraftBtn);
          coverCraftBtn.addEventListener("click", writeCoverLetter);
        }
      );
    };

    const createPrompt = async (jobDescription) => {
        userAbout = await fetchUserAbout();
        const textBody =
            "Create a cover letter for the following job description:\n" +
            jobDescription +
            "\n using following about" +
            userAbout;

        return textBody.replace(/"/g, "'");
    }

    async function writeCoverLetter() {

      attemptToGetJobDescription(
        10,
        1,
        ".styles_description__bGSzH",
        "innerText",
        async (jobDescription) => {
            if (jobDescription) {
                let coverLetter = await sendJobDescriptionToServer(jobDescription);
                const textAreaInput = document.querySelector("form textarea");
                textAreaInput.value = coverLetter;

            }
        }
      );
    }


    async function sendJobDescriptionToServer(jobDescription) {
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${apiKey}`;
        const textBody = await createPrompt(jobDescription);

        const payload = {
            prompt: {
                text: textBody,
            },
        };

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (data.candidates && data.candidates.length > 0) {
                return data.candidates[0].output;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error sending job description to the server!");
            return null;
        }
    }





    newJobLoaded();
  })();

