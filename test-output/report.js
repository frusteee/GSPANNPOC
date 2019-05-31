$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ScenarioOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Scenario Outline Example",
  "description": "",
  "id": "scenario-outline-example",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Stores a raw data of name place animal",
  "description": "",
  "id": "scenario-outline-example;stores-a-raw-data-of-name-place-animal",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "My name is \"\u003cname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "My place is \"\u003cplace\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I have a \"\u003canimal\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "scenario-outline-example;stores-a-raw-data-of-name-place-animal;",
  "rows": [
    {
      "cells": [
        "name",
        "place",
        "animal"
      ],
      "line": 10,
      "id": "scenario-outline-example;stores-a-raw-data-of-name-place-animal;;1"
    },
    {
      "cells": [
        "Rahul",
        "Noida",
        "Lion"
      ],
      "line": 11,
      "id": "scenario-outline-example;stores-a-raw-data-of-name-place-animal;;2"
    },
    {
      "cells": [
        "Deepak",
        "Gurgaon",
        "Cow"
      ],
      "line": 12,
      "id": "scenario-outline-example;stores-a-raw-data-of-name-place-animal;;3"
    },
    {
      "cells": [
        "Amit",
        "Delhi",
        "Dog"
      ],
      "line": 13,
      "id": "scenario-outline-example;stores-a-raw-data-of-name-place-animal;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10614448737,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Stores a raw data of name place animal",
  "description": "",
  "id": "scenario-outline-example;stores-a-raw-data-of-name-place-animal;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "My name is \"Rahul\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "My place is \"Noida\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I have a \"Lion\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Rahul",
      "offset": 12
    }
  ],
  "location": "ScenarioOutlineStepDef.my_name_is_something(String)"
});
formatter.result({
  "duration": 837651160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Noida",
      "offset": 13
    }
  ],
  "location": "ScenarioOutlineStepDef.my_place_is_something(String)"
});
formatter.result({
  "duration": 916011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lion",
      "offset": 10
    }
  ],
  "location": "ScenarioOutlineStepDef.i_have_a_something(String)"
});
formatter.result({
  "duration": 425911,
  "status": "passed"
});
formatter.after({
  "duration": 1165071953,
  "status": "passed"
});
formatter.before({
  "duration": 8161524959,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Stores a raw data of name place animal",
  "description": "",
  "id": "scenario-outline-example;stores-a-raw-data-of-name-place-animal;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "My name is \"Deepak\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "My place is \"Gurgaon\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I have a \"Cow\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Deepak",
      "offset": 12
    }
  ],
  "location": "ScenarioOutlineStepDef.my_name_is_something(String)"
});
formatter.result({
  "duration": 649817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gurgaon",
      "offset": 13
    }
  ],
  "location": "ScenarioOutlineStepDef.my_place_is_something(String)"
});
formatter.result({
  "duration": 241652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cow",
      "offset": 10
    }
  ],
  "location": "ScenarioOutlineStepDef.i_have_a_something(String)"
});
formatter.result({
  "duration": 229946,
  "status": "passed"
});
formatter.after({
  "duration": 1110304220,
  "status": "passed"
});
formatter.before({
  "duration": 7410957927,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Stores a raw data of name place animal",
  "description": "",
  "id": "scenario-outline-example;stores-a-raw-data-of-name-place-animal;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "My name is \"Amit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "My place is \"Delhi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I have a \"Dog\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Amit",
      "offset": 12
    }
  ],
  "location": "ScenarioOutlineStepDef.my_name_is_something(String)"
});
formatter.result({
  "duration": 1070064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 13
    }
  ],
  "location": "ScenarioOutlineStepDef.my_place_is_something(String)"
});
formatter.result({
  "duration": 361722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dog",
      "offset": 10
    }
  ],
  "location": "ScenarioOutlineStepDef.i_have_a_something(String)"
});
formatter.result({
  "duration": 334159,
  "status": "passed"
});
formatter.after({
  "duration": 1101853205,
  "status": "passed"
});
});