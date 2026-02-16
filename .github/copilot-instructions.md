# Copilot Instructions for Demoappaz204

## General
- Follow the existing repository structure and patterns.
- Keep changes focused to the requested task only.
- Do not rewrite unrelated code or reformat entire files.
- Prefer readable, maintainable code over clever shortcuts.

## ASP.NET Core / C#
- Follow ASP.NET Core best practices already used in this repository.
- Use dependency injection instead of static helpers.
- Use async/await for I/O operations.
- Use CancellationToken where it fits naturally.
- Follow C# naming conventions:
  - PascalCase for public members and classes
  - camelCase for local variables and private fields

## Code Style
- Keep methods small and single-purpose.
- Prefer clear error handling and meaningful messages.
- Avoid deeply nested logic; return early when possible.

## Logging and Security
- Follow the existing logging approach in the project.
- Never log secrets, tokens, connection strings, or credentials.
- Validate user input before using it in queries or file operations.

## Testing (when asked)
- If tests are requested, use the existing test style already present in the repo.
- Focus tests on business logic and edge cases.
- Use descriptive test names that explain the scenario being tested.