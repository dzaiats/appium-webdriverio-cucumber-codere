Feature: Login validations

  Background:
    Given I accept cookies

  Scenario: Displays login error, when entering provided credentials
    When I open login screen
    And I try to log in with credentials email: 'test-bloqueado1234' and password: 'ejercicioTecnico'
    Then app displays a message that the credentials are invalid
    And I close the error
