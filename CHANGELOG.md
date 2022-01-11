<!-- markdownlint-disable no-duplicate-header -->

# Changelog

All notable changes to this project will be documented in this file.

## [HEAD]

### Added

- New `ut data table reporter()`

### Changed

### Fixed

- Use a more uniform `Method` call style of `this:inner << describe` rather than `this:inner:describe`.
- `ut expect call` and `ut verify mock` examples now run correctly.
- `ut assert that` no longer clobbers `exception_msg` (started with skipped tests feature)

## [2.0.0]

### Added

- `ut localized` to enable localizing content using an associative array and language codes.
- `ut mock function`, `ut expect call`, and `ut verify mock` for testing callbacks
- Extended reporting API to support skipped tests and assertions.
  Use the `ut test case` `<<Skip If` message for skipping entire tests.
  Use the `ut skip` matcher for skipping assertions.

### Changed

- Convenience `ut throws` helper functions now use `ut localize` to assert using the current languages error message.
- `UtJunitXMLReporter` reports file and classname attributes for testcases and treats throws differently from failures.
- The `ut skip` matcher now issues a `skip` rather than a `success`. The `ut skip succeeding` matcher has the old behavior.
- The `label` is now explicitly given to the reporter a four-element list rather than having to split on `ut concat test label sep`.
  These are `{case name, test name, assertion label, assertion id}`. The `ut concat test label` function has been removed and
  replaced by a combination of `ut form test label`, `ut format test label`, and `ut fwd test label`. A quick rewrite of the `label`
  argument in your `UtReporter` messages like `label = ut format test label(label)` will get back to the old behavior. (#59)

### Fixed

- Avoid potential collision with builtin functions in `UtSizeMatcher` (#109, #111)
- `UtWindowDispatchingReporter` now uses a more reliable key which works for any box within a window (#118)
- Added `ut parsed` to the Scripting Index (#115)
- `ut test` decorated assertions no longer report as anonymous functions (#119)

## [1.2.0]

### Added

- Custom functions for matcher, assertion, test, and test case functions with examples in the Scripting Index and hover help (#58 #64).
- Development addin that can be linked to a repository for easy updating (#66)
- `ut valid xml` matcher (#56)
- `UtJunitXMLReporter` (#56)
- `UtCompositeReporter` now available in base package (#90)

### Changed

- JunitXMLReporter now reports failures per test case instead of per assertion (#87, #77).
- `UtFileAppendingReporter` has an optional argument to write successes

### Fixed

- Fixed opening help on Mac and fallback to online help when local help not available (#70)
- Nested `ut test`s now work with log benching (#63 #71).
- `ut equal to` no longer fails with an empty matrix (#72).
- `ut approx` now properly shows actual value for matrices (#74).
- Initializing the addin with an already configured `ut global reporter` will preserve that reporter (#83).
- `ut expression matches` now supports strings with children (#88)
- `ut file appending reporter` factory function now works properly (#96).
- `ut test` now saves and restores the current row number to better isolate tests (#97).

## [1.1.0]

### Added

- Unit Tests for Hamcrest itself (#2)
- `UtInstanceOfMatcher` (#1)
- Allow for unregistering custom matchers (#19)
- Unit Tests for Addin Reporters (basic, #23)
- `Matchers/Custom` and `Reporters/Custom` folders for installation of user-defined classes (#24)
- Allow user-defined assertions to be used with `ut test` (#27)
- `UtTypedMatcher` now supports `Scriptable` as an allowable type (#42)
- `ut enabled` matcher (#40 #42)
- `ut assert value` to make assertions while evaluating at call site rather than in matcher (#46)

### Changed

- Must use factory functions for reporters rather than `New Object` (#3).
- Test labels can now be anything (not just strings, #6)
- Embedded Log is now off by default (for GUI, #18)
- Reworded `ut all of` mismatch to be less confusing (#21)
- `StreamingLogReporter` now gives a better error message when expecting an expression (#22)
- `ut global reporter` will no longer be overwritten if `Core.jsl` is included multiple times (#26)
- `UtMessageMatcher` mismatch message has been improved (#42)
- `UtMessageMatcher` will now always send a message if the object is scriptable instead of attempting to
  detect messages that are allowed. If a message is not supported by an object, it will return missing. (#42)

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
