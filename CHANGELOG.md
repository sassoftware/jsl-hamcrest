
# Changelog
All notable changes to this project will be documented in this file.

## [1.1.0]
### Added
 - Unit Tests for Hamcrest itself (#2)
 - `UtInstanceOfMatcher` (#1)
 - Allow for unregistering custom matchers (#19)
 - Unit Tests for Addin Reporters (basic, #23)
 - `Matchers/Custom` and `Reporters/Custom` folders for installation of user-defined classes (#24)

### Changed
 - Must use factory functions for reporters rather than `New Object` (#3).
 - Test labels can now be anything (not just strings, #6)
 - Embedded Log is now off by default (for GUI, #18)
 - Reworded `ut all of` mismatch to be less confusing (#21)
 - `StreamingLogReporter` now gives a better error message when expecting an expression (#22)

### Fixed
 - Log failures within `ut test` now affect return code (#6)
 - Namespaces and Classes are now properly cleaned up after `ut test` (#7)
 - Locals in `ut assert that` are now less likely to collide with user variables (#8)

## [1.0.1] - Inital version available on GitHub
### Changed
 - Changes to allow publishing as open-source project.

### Fixed
 - Fixes for the embedded log in the add-in.

## [1.0.0] - Initial version released at Discovery Europe 2019
