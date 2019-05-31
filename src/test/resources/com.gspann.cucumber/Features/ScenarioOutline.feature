@test
Feature: Scenario Outline Example
  Scenario Outline: Stores a raw data of name place animal
    Given My name is "<name>"
    And My place is "<place>"
    And I have a "<animal>"


    Examples:
    |name  |place  |animal|
    |Rahul |Noida  |Lion |
    |Deepak|Gurgaon|Cow  |
    |Amit  |Delhi  |Dog  |