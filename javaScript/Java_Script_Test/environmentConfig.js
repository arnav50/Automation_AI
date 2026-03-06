const envName = "dev";

const Dev_URL = "https://dev-api.testtesting.com";
const QA_URL = "https://qa-api.testtesting.com";
const STAGE_URL = "https://stage-api.testtesting.com";
const PROD_URL = "https://prod-api.testtesting.com";

let baseUrl;
let apiKey;
let timeout;
let description;

switch(envName.toLowerCase()){

case "dev":
baseUrl = Dev_URL;
apiKey = "dev_key_XXXX-XXXX";
timeout = 5000;
description = "Decelopment - Internal Testing";
break;

case "staging":
baseUrl = STAGE_URL;
apiKey = "stage_key_XXXX-XXXX";
timeout = 8000;
description = "Staging - Pre-production mirror";
break;

case "qa":
baseUrl = QA_URL;
apiKey = "qa_key_XXXX-XXXX";
timeout = 7000;
description = "QA - Dedicated testing environment";
break;

case "prod":
baseUrl = PROD_URL;
apiKey = "prod_key_XXXX-XXXX";
timeout = 3000;
description = "Production - Live envirnment";
break;

default:
console.log("Invalid envirnment name");

}

console.log("Environment:", envName.toUpperCase());
console.log("Base URL:", baseUrl);
console.log("API Key:", apiKey);
console.log("Timeout:", timeout + "ms");
console.log("Description:", description);