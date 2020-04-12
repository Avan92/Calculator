$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("calci.feature");
formatter.feature({
  "line": 2,
  "name": "Performing different operations with calculator app",
  "description": "",
  "id": "performing-different-operations-with-calculator-app",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@anu"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify user can perform addition",
  "description": "",
  "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user selects \"\u003cNumber1\u003e\" number",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"\u003cOperation\u003e\" operation",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects \"\u003cNumber2\u003e\" number",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user clicks on equals symbol",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should get \"\u003cResult\u003e\" result",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;",
  "rows": [
    {
      "cells": [
        "Number1",
        "Operation",
        "Number2",
        "Result"
      ],
      "line": 13,
      "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;1"
    },
    {
      "cells": [
        "75",
        "multiply",
        "30",
        "2250"
      ],
      "line": 14,
      "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;2"
    },
    {
      "cells": [
        "9",
        "divide",
        "3",
        "3"
      ],
      "line": 15,
      "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;3"
    },
    {
      "cells": [
        "125",
        "plus",
        "2056",
        "2181"
      ],
      "line": 16,
      "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;4"
    },
    {
      "cells": [
        "898",
        "minus",
        "500",
        "398"
      ],
      "line": 17,
      "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;5"
    },
    {
      "cells": [
        "0",
        "divide",
        "1",
        "0"
      ],
      "line": 18,
      "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;6"
    },
    {
      "cells": [
        "1",
        "divide",
        "0",
        ""
      ],
      "line": 19,
      "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19261944100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify user can perform addition",
  "description": "",
  "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@anu"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user selects \"75\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"multiply\" operation",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects \"30\" number",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user clicks on equals symbol",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should get \"2250\" result",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "75",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userSelectsNumber(String)"
});
formatter.result({
  "duration": 2363705600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "multiply",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnOperation(String)"
});
formatter.result({
  "duration": 695165900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userSelectsNumber(String)"
});
formatter.result({
  "duration": 1383041700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnEqualsSymbol()"
});
formatter.result({
  "duration": 724167800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2250",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldGetResult(String)"
});
formatter.result({
  "duration": 873585300,
  "status": "passed"
});
formatter.write("Please inform this bug to john");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1200464100,
  "status": "passed"
});
formatter.before({
  "duration": 12714242900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify user can perform addition",
  "description": "",
  "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@anu"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user selects \"9\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"divide\" operation",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects \"3\" number",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user clicks on equals symbol",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should get \"3\" result",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userSelectsNumber(String)"
});
formatter.result({
  "duration": 1645260100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "divide",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnOperation(String)"
});
formatter.result({
  "duration": 681310900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userSelectsNumber(String)"
});
formatter.result({
  "duration": 705754100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnEqualsSymbol()"
});
formatter.result({
  "duration": 673645700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldGetResult(String)"
});
formatter.result({
  "duration": 835135300,
  "status": "passed"
});
formatter.write("Please inform this bug to john");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 771807400,
  "status": "passed"
});
formatter.before({
  "duration": 12670614500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Verify user can perform addition",
  "description": "",
  "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@anu"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user selects \"125\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"plus\" operation",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects \"2056\" number",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user clicks on equals symbol",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should get \"2181\" result",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "125",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userSelectsNumber(String)"
});
formatter.result({
  "duration": 2836781200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "plus",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnOperation(String)"
});
formatter.result({
  "duration": 707423300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2056",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userSelectsNumber(String)"
});
formatter.result({
  "duration": 2715819700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnEqualsSymbol()"
});
formatter.result({
  "duration": 663401000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2181",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldGetResult(String)"
});
formatter.result({
  "duration": 832643800,
  "status": "passed"
});
formatter.write("Please inform this bug to john");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 797935500,
  "status": "passed"
});
formatter.before({
  "duration": 12498862800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify user can perform addition",
  "description": "",
  "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@anu"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user selects \"898\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"minus\" operation",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects \"500\" number",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user clicks on equals symbol",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should get \"398\" result",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "898",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userSelectsNumber(String)"
});
formatter.result({
  "duration": 2844377200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "minus",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnOperation(String)"
});
formatter.result({
  "duration": 691998900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userSelectsNumber(String)"
});
formatter.result({
  "duration": 2027614000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnEqualsSymbol()"
});
formatter.result({
  "duration": 683311500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "398",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldGetResult(String)"
});
formatter.result({
  "duration": 829397100,
  "status": "passed"
});
formatter.write("Please inform this bug to john");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 940704600,
  "status": "passed"
});
formatter.before({
  "duration": 12414743000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify user can perform addition",
  "description": "",
  "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@anu"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user selects \"0\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"divide\" operation",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects \"1\" number",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user clicks on equals symbol",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should get \"0\" result",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userSelectsNumber(String)"
});
formatter.result({
  "duration": 1519783500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "divide",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnOperation(String)"
});
formatter.result({
  "duration": 657527500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userSelectsNumber(String)"
});
formatter.result({
  "duration": 698680600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnEqualsSymbol()"
});
formatter.result({
  "duration": 704722800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldGetResult(String)"
});
formatter.result({
  "duration": 844379200,
  "status": "passed"
});
formatter.write("Please inform this bug to john");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 767853000,
  "status": "passed"
});
formatter.before({
  "duration": 12337485600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify user can perform addition",
  "description": "",
  "id": "performing-different-operations-with-calculator-app;verify-user-can-perform-addition;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@anu"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user selects \"1\" number",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user clicks on \"divide\" operation",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user selects \"0\" number",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user clicks on equals symbol",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should get \"\" result",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userSelectsNumber(String)"
});
formatter.result({
  "duration": 1735623100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "divide",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnOperation(String)"
});
formatter.result({
  "duration": 729124700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    }
  ],
  "location": "MyStepdefs.userSelectsNumber(String)"
});
formatter.result({
  "duration": 691313800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnEqualsSymbol()"
});
formatter.result({
  "duration": 707570100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.userShouldGetResult(String)"
});
formatter.result({
  "duration": 79296200,
  "status": "passed"
});
formatter.write("Please inform this bug to john");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 808867700,
  "status": "passed"
});
});