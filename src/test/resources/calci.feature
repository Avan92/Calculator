@anu
Feature: Performing different operations with calculator app

  Scenario Outline: Verify user can perform addition

    Given user selects "<Number1>" number
    And user clicks on "<Operation>" operation
    Given user selects "<Number2>" number
    When user clicks on equals symbol
    Then user should get "<Result>" result

    Examples:
      | Number1 | Operation | Number2 | Result |
      | 75      | multiply  | 30      | 2250   |
      | 9       | divide    | 3       | 3      |
      | 125     | plus      | 2056    | 2181   |
      | 898     | minus     | 500     | 398    |
      | 0       | divide    | 1       | 0      |
      | 1       |divide     |0        |        |






