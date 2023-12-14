Feature: Login validations

  Background:
    Given I accept cookies

  Scenario Outline: Displays login error, when entering provided credentials
    When I open login screen
    And I try to log in with credentials email: '<username>' and password: '<password>'
    Then app displays a message that the credentials are invalid
    And I close the error

    Examples:
      | username             | password           |
      | test-bloqueado1234   | ejercicioTecnico   |
      | test-bloqueado1234_2 | ejercicioTecnico_2 |
