import React from "react";
import "../CSS/Docmain.css";
import DataTable from "./DataTable";

function Docmain() {
  const data = {
    name: "John Doe",
    age: 32,
    email: "johndoe@example.com",
  };

  const schema = {
    airline: "object",
    finance: "object ",
    company: "string",
  };

  const response = {
    airline: {
      airline: {
        name: "Air Algerie",
        iataCode: "AH",
      },
      airplane: {
        name: "Embraer Legacy 600",
        iataTypeCode: "ER3",
      },
      aircraft: "narrowbody",
      airport: {
        name: "Los Angeles International Airport",
        iataCode: "LAX",
      },
    },
    finance: {
      currency_name: "CFA Franc BCEAO",
      currency_symbol: "₨",
      account_name: "Auto Loan Account",
      account_number: "35144354",
      amount: "405.59",
    },
    company: "Schoen, Fay and Schultz",
  };

  return (
    <div className=" mx-7 p-4 ">
      <h1 className="text-5xl font-bold mb-5">TesTify</h1>
      <p className="marginrequiredtxt">
        Testify is an efficient API website that simplifies unit testing for
        your projects. With just a simple GET request, Testify generates
        comprehensive testing data without the need to import or manage any
        additional packages. Say goodbye to the hassle of setting up testing
        frameworks and let Testify handle all your unit testing needs
        effortlessly. Streamline your development process and ensure the quality
        and reliability of your code with Testify.
      </p>

      <div className="my-4">
        <h2 className="text-4xl font-bold mb-2 marginrequired">
          Getting Started
        </h2>
        <div className="marginrequiredtxt">
          To begin using Testify, follow these simple steps:
          <ul className="list-disc list-inside		">
            <li>Make a GET request to the Testify API endpoint.</li>
            <li>
              Provide the necessary parameters to customize your testing data.
            </li>
            <li>Receive the generated unit testing data in the response.</li>
          </ul>
        </div>
      </div>

      <div className="my-4  ">
        <h2 className="text-4xl font-bold mb-2 marginrequired ">
          Get Your API-Key
        </h2>
        <p className="marginrequiredtxt">
          Before you can start using the Testify API, you need to generate your
          API key by verifying your email. To ensure the security of your
          account and API usage, we follow a verification process. Here's how it
          works:
        </p>
        <div className="py-4">
          <ul className="list-disc list-inside">
            <li>
              Verify your on the Testify website
              (https://testify-1-0.vercel.app/login).
            </li>
            <li>
              Open the email and verify your email address using the OTP sent to
              your email.
            </li>
            <li>
              Once your email is verified,an API Key will be sent to your email
              automatically
            </li>
            <li>
              Copy your API key, as you will need it for making API requests.
            </li>
          </ul>
        </div>

        <p>
          By completing the email verification process, you ensure that only
          authorized users can access and utilize the Testify API. If you
          encounter any issues during the email verification or API key
          generation process, please reach out to our support team for
          assistance.
        </p>
      </div>

      <div className="my-4">
        <h2 className="text-4xl font-bold mb-2 marginrequired">
          API Endpoints
        </h2>

        <div className="my-4">
          <ul className="list-disc list-inside">

          <h3 className="text-lg font-medium mb-2 marginrequiredtxt">
              <li> BaseUrl </li>
            </h3>

            <p>
              This is the BaseUrl for you to make requests.
            </p>

            <div className="my-4">
              <h4 className="text-md font-medium mb-2">
                BaseUrl :{" "}
                <span>
                  <code className="codebackground text-md p-1 rounded-md border ">
                    baseurl
                  </code>
                </span>
              </h4>
            </div>




            <h3 className="text-lg font-medium mb-2 marginrequiredtxt">
              <li> Retrieve Testing Data </li>
            </h3>

            <p>
              This endpoint allows you to retrieve testing data based on the
              provided schema.
            </p>

            <div className="my-4">
              <h4 className="text-md font-medium mb-2">
                Endpoint :{" "}
                <span>
                  <code className="codebackground text-md p-1 rounded-md border ">
                    GET /get-data/:key?schema=&#123;...&#125;
                  </code>
                </span>
              </h4>
            </div>

            <div className="my-4">
              <h4 className="text-lg font-medium mb-2 marginrequiredtxt">
                {" "}
                <li>Parameters </li>
              </h4>

              <ul className="list-none list-inside ">
                <li className="mt-4">
                  <code className="codebackground text-md p-1 rounded-md border ">
                    Api-key(required)
                  </code>{" "}
                  Your API key obtained from Testify WebApp.
                </li>
                <li className="mt-4">
                  <code className="codebackground text-md p-1 rounded-md border ">
                    schema (required)
                  </code>{" "}
                  A JSON object representing the schema for the desired testing
                  data. Refer to the documentation for available data types and
                  their field names.
                </li>
              </ul>
            </div>
          </ul>

          <div className="my-4">
            <h4 className="text-lg font-medium mb-[5vh] marginrequiredtxt">
              Example
            </h4>
            <code className="codebackground text-md p-3 rounded-md border  ">
              GET
              /get-data/your-api-key?schema=&#123;"name":"string","age":"age","email":"email"&#125;
            </code>
          </div>

          <div className="my-4">
            <h4 className="text-lg font-medium mb-[5vh] marginrequired">
              Response
            </h4>
            <pre className="codebackground text-md p-3 rounded-md border overflow-x-auto ">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        </div>
      </div>

      <div className="my-4">
        <h2 className="text-4xl font-bold mb-2 marginrequired">Data Types</h2>
        <p>The Testify API supports the following Field in the schema :</p>
        <DataTable />
      </div>

      <div className="my-4">
        <h4 className="text-lg font-medium mb-[5vh] marginrequired">
          A basic schema can look like this :
        </h4>
        <pre className="codebackground text-md p-3 rounded-md border overflow-x-auto ">
          {JSON.stringify(schema, null, 2)}
        </pre>
      </div>

      <div className="mb-2">
        <p>Which when passed into the API will return :</p>
      </div>
      <span>
        <code className="codebackground text-md p-1 rounded-md border ">
          200 OK
        </code>{" "}
        : Request is successful
      </span>
      <pre className="codebackground text-md p-3 mt-4 rounded-md border overflow-x-auto ">
        {JSON.stringify(response, null, 2)}
      </pre>
 
      <div className="my-4">
        <h2 className="text-2xl font-medium mb-2">Next Steps</h2>
        <p>
        Congratulations! You have successfully set up and explored the Testify API. To further enhance your experience . Experiment with different schema configurations to generate specific types of testing data that match your application's requirements. Refer to the API documentation for a comprehensive list of available data types and their corresponding fields.

        <p className="mt-6"><span className="font-bold text-lg" > Note :</span> The API key provided to you is a confidential piece of information that grants access to Testify . It is important to keep your API key 
        secure and avoid sharing it with unauthorized individuals  </p>
        </p>
      </div>
    </div>
  );
}

export default Docmain;
