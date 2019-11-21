# How to Contribute

We'd love to accept your patches and contributions to this project. There are
just a few small guidelines you need to follow.

## Contributor License Agreement

Contributions to this project must be accompanied by a signed
[Contributor Agreement](ContributorAgreement.txt).
You (or your employer) retain the copyright to your contribution,
this simply gives us permission to use and redistribute your contributions as
part of the project.

## Code reviews

All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult
[GitHub Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

## Coding Style Guide

- Functions should start with `ut` and be lower space case. Local variables should
  also be lower space case.

```jsl
ut my function = Function({my arg},
    my local = 5;
    my arg + my local;
);
```

- Matcher class names should start with `Ut`, end with `Matcher` and use CamelCase.

```jsl
    Define Class( "UtMyMatcher", ... );
```

- Documentation should be provided for all functions, variables, and classes.
  Below is an example of how to document a function. Only a description is
  required but other parts like prototype, arguments, and examples are
  encouraged.

```jsl
/*  Function: ut my function
        ---Prototype---
        ut my function( x )
        ---------------
        Some useful, potentially multiple paragraph description.

    Arguments:
        x - description of argument
    Example:
        This is an example
        ---JSL---
        x = 5;
        ut my function( 5 );
        ---------
*/
ut my function({x}, ... );
```

## Things to Know

- Some matchers, especially ones that inherit funtionality from base classes
  require injecting a self reference, which is done within the matcher factory.
- Some functions utilize `ut move to anonymous namespace` to prevent variable collisions
