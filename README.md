# JSL-Hamcrest

Implementation of Hamcrest (hamcrest.org) for JSL. Write expressive tests with 
informative failure messages. Make tests more self-contained and reduce 
information spilling between them.

## Abstract - JMP Discovery Summit 2019

#### Automate the Testing of JSL Using Hamcrest

Have you written some JSL and gotten tired of manually testing after every change? 
Have you inadvertently broken some piece of your application, or has the fear of 
doing so prevented you from making the changes you want to make? With automated 
testing, you can be more confident in your changes. Now available is a set of tools 
for automating the testing of JSL. This framework includes the creation of tests 
and test cases, as well as an implementation of the well-known Hamcrest assertion 
library. Hamcrest provides flexible ways to assert what you know to be true about 
the behavior of your JSL. These tools are full-featured and can be specialized for 
your needs. In fact, JMP development even uses them to test JMP itself.The 
presentation will cover this framework and its use in testing an example JSL 
application, from individual functions to the automation of GUI interactions.

## Documentation

Check out our [documentation](https://sassoftware.github.io/jsl-hamcrest/#File:Matchers-Index.txt) website for detailed information about using JSL-Hamcrest.

## Getting Started

### System Requirements

* Works on Mac and Windows operating systems
* Requires JMP 14.1 or higher

### Installing

Open the `JSL-Hamcrest.jmpaddin` file in JMP to install.

### Writing Hamcrest Tests

```jsl
formulas test case = ut test case("Formulas")
	<< Setup(Expr(
		dt = Open("$SAMPLE_DATA\Big Class.jmp");
	))
	<< Teardown(Expr(
		Close(dt, NoSave);
	));
	
ut test(formulas test case, "Advance Row", Expr(
	dt << new column("Test", Formula(Row()));
	ut assert that(Expr(dt:Test << Get Values), (1::40)`); 
));
```

### Using the Hamcrest Test-Runner Add-In

1. Install the Add-In
2. Write tests in a JMP script editor
3. Attach a Test-Runner to the editor
4. Press F5

## Writing a New Matcher

The ability to create new matchers is part of what makes JSL-Hamcrest so powerful.
You can create matchers for your own specific use case, or contribute one back
to the community.

### UtMatcher Class

The first step is to define a class that has `UtMatcher` as its base class.
You just need to define the `_init_` (if needed), `matches`, and `describe` methods
within your class.

```jsl
/*	Class: UtDayOfWeekMatcher
		Checks the day of week for a date.
*/
Define Class( "UtDayOfWeekMatcher",
	Base Class( "UtMatcher" ),
	value = .;
	days = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
	// Method: _init_
	// Needed if value or inner matcher needs to be saved
	_init_ = Method( {value},
		this:value = value;
	);
	// Method: matches
	// Return match info with success/failure info
	matches = Method( {test expr},
		// This evaluates the test expression
		actual = test expr;
		// Dates are numbers in JMP, so check the type first
		// Name Expr() is needed to prevent actual from
		// evaluating again in case it is an expression.
		If( !Is Number( Name Expr( actual ) ),
				// This returns the match info 
				ut match info failure( 
					Eval Insert( "^Name Expr( actual )^ was of type ^Type( Name Expr( actual ) )^" )
				),
			// If matches the correct day of week, return success
			Day of Week( actual ) == this:value,
				ut match info success(),
			// else not on given day of week, return failure
				ut match info failure(
					Eval Insert( "^As Date( actual )^ was on ^this:days[Day of Week( actual )]^" )
				)
		);
	);
	
	// Method: describe
	// Describes the be expected outcome
	describe = Method( {},
		Eval Insert( "date falling on a ^this:days[Day of Week( this:value )]^" )
	);
);
```

### Matcher Factory

After you have the matcher defined, you need to create a factory function. This
function's name is what will be used in assertions. Include a call to 
`ut matcher factory` to register the matcher needed for some other matchers.

```jsl
/*	Function: ut day of week
		Factory function for <UtDayOfWeekMatcher>.
		
	Example:
		---JSL---
		d = 01aug2019;
		ut assert that( Expr( d ), ut day of week( 5 ) );
		---------
*/
ut matcher factory( 
  "ut day of week",
  Expr(Function( {val},
    // Do necessary type checking of input variables
    // in factory function.
    If( !Is Number( val ),
      Throw( "ut day of week() requires a numeric date value as the argument" ),
    );
    New Object( UtDayOfWeekMatcher( Name Expr( val ) ) );
  )),
  "ut day of week( value )", //Prototype
  "Matches based on the day of the week of a given date value." // Description
);
```

### UtTypedMatcher

You can also derive from `UtTypedMatcher` to have any type checking done for you.
This simplifies a lot of what happens in the `matches` method.

```jsl
Define Class( "UtDayOfWeekMatcher",
	Base Class( "UtTypedMatcher" ),
	value = .;
	days = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
	allowable types = {Date, Number};
	_init_ = Method( {value},
		this:value = value;
	);
	// Method: typed matches
	// Handle a pre-evaluated and typed checked actual value.
	typed matches = Method( {actual},
		day = Day of Week( actual );
		If( day == this:value,
				ut match info success(),
			// else
				ut match info failure(
					Eval Insert( "^As Date( actual )^ was on ^this:days[Day of Week( actual )]^" )
				)
		);
	);
	
	describe = Method( {},
		Eval Insert( "date falling on a ^this:days[Day of Week( this:value )]^" )
	);
);
```

With deriving from `UtTypedMatcher`, you are required to inject a self reference
onto the matcher within the factory function.

```jsl
ut day of week = Function( {val},
	If( !Is Number( val ),
		Throw( "ut day of week() requires a numeric date value as the argument" ),
	);
	obj = New Object( UtDayOfWeekMatcher( Name Expr( val ) ) );
	obj:self = obj;
);
```

### Multiple Factories

You can have multiple factory functions for a single matcher to either change the
comparison method (like less than/greater than) or to improve the wording, such
as `ut on thursday()` instead of `ut day of week( 5 )`.

```jsl
ut on thursday = Function( {},
	ut day of week( 5 );
);
```

## Building Documentation

1. Download [Natural Docs](naturaldocs.org)
2. Navigate to the root of this project
3. Run NaturalDocs 
   > NaturalDocs Docs
4. Open `Docs/_html/index.html`

## Releasing a Version

See [Semantic Versioning](semver.org) for details on version numbers.

1. Check `CHANGELOG.md`, `addin.def`, and `Source/DevAddin/addin.def` for correct (current) version number.
2. Build the documentation.
3. Zip up the entire repository with `addin.def` at the root (don't include the `.git` folder).
4. Rename the zip file as `JSL-Hamcrest-v<MAJOR>.<MINOR>.<PATCH>.jmpaddin`.
5. Zip up the `Source/DevAddin` folder with its `addin.def` at the root.
6. Rename the zip file as `JSL-Hamcrest-Dev-v<MAJOR>.<MINOR>.<PATCH>.jmpaddin`.
7. Push a tag of the form `v<MAJOR>.<MINOR>.<PATCH>`.
8. Create a GitHub release. Add the relevant `CHANGELOG` section there and attach the two addins.
9. Update the `gh-pages` branch
10. Create a new Pull Request bumping the version number to the next predicted (see files from (1))

## Support

We use GitHub for tracking bugs and feature requests. Please submit a GitHub issue or pull request for support.

## Contributing

We welcome your contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to submit contributions to this project.

## License

This project is licensed under the [Apache 2.0 License](LICENSE).

## Attributions

Icons used in the JSL-Hamcrest add-in were adapted from the 
[Material Design Icons](https://github.com/google/material-design-icons) 
by Google under their 
[Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

## Additional Resources

- Original presentation materials from JMP Discovery Summit Europe 2019 can be found [here](https://community.jmp.com/t5/Discovery-Summit-Europe-2019/Automate-the-Testing-of-JSL-Using-Hamcrest-2019-EU-45MP-061/ta-p/110062).
- [Hamcrest.org](http://hamcrest.org/)
