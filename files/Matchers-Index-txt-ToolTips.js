NDContentPage.OnToolTipsLoaded({4:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype4\" class=\"NDPrototype NoParameterForm\">ut empty()</div><div class=\"TTSummary\">Uses the built-in Empty() function to determine if something is empty.</div></div>",8:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype8\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut <span class=\"SHKeyword\">throws</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Captures a thrown message from evaluating the actual expression.&nbsp; Inner matchers can be used to assert on the actual error message.&nbsp; The error message comes from the first argument in the exception_msg variable, and not from the log.</div></div>",9:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype9\" class=\"NDPrototype NoParameterForm\">ut <span class=\"SHKeyword\">throws</span> invalid arg()</div><div class=\"TTSummary\">Equivalent to ut throws( &quot;argument value is invalid&quot; )</div></div>",10:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype10\" class=\"NDPrototype NoParameterForm\">ut <span class=\"SHKeyword\">throws</span> too many args()</div><div class=\"TTSummary\">Equivalent to ut throws( &quot;too many arguments&quot; )</div></div>",11:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype11\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut <span class=\"SHKeyword\">throws</span> name unresolved(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">String&nbsp;</td><td class=\"PName last\">var&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Equivalent to ut throws( &quot;Name Unresolved: var&quot; )</div></div>",16:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype16\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut vec diag(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Compare using Vec Diag() transformation for a given matrix.</div></div>",17:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype17\" class=\"NDPrototype NoParameterForm\">ut diagonal()</div><div class=\"TTSummary\">Used to assert that a given matrix is diagonal, meaning it is a square matrix where all off-diagonal elements are zero.</div></div>",21:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype21\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut as lowercase(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Converts actual value to lowercase before passing it to an inner matcher (or equal to if one is not provided).</div></div>",22:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">--Prototype--- ut as uppercase( UtMatcher matcher )</div></div>",26:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype26\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut typed as(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the type of the actual value for an inner matcher.</div></div>",30:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype30\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut instance of(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">class</span>&nbsp;</td><td class=\"PName last\">object&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Factory function for UtInstanceOfMatcher.</div></div>",34:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype34\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut contains pattern(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">pattern&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks for a regex pattern within the evaluated actual expression.</div></div>",38:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype38\" class=\"NDPrototype NoParameterForm\">ut anything()</div><div class=\"TTSummary\">Always returns a success.</div></div>",39:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype39\" class=\"NDPrototype NoParameterForm\">ut wild()</div><div class=\"TTSummary\">Alias of ut anything.</div></div>",43:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype43\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut close to(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">number&nbsp;</td><td class=\"PName last\">value,</td></tr><tr><td class=\"PType first\">number&nbsp;</td><td class=\"PName last\">delta&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns a success if the actual value is within the delta of the expected value.</div></div>",47:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype47\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut all of(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">List&lt;UtMatcher&gt;&nbsp;</td><td class=\"PName last\">matchers&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Matches the test expression with every matcher given in the list.</div></div>",52:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype52\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut contains(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">object&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Uses built-in Contains() function to check if the actual value contains the expected value.</div></div>",53:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype53\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut contains item(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks if the actual value contains the expected value.&nbsp; Expected value can be an inner matcher if the actual result is a list.</div></div>",57:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype57\" class=\"NDPrototype NoParameterForm\">ut no <span class=\"SHKeyword\">throw</span>()</div><div class=\"TTSummary\">Returns success if evaluated test expr does not throw. This is often unnecessary since an unexpected throw is treated as an failure. However, this can be useful if you specifically want to test that there is no throw and don\'t care about the result.</div></div>",61:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype61\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut not(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Negates the given inner matcher.</div></div>",65:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype65\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut log output(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Factory function for UtLogMatcher.</div></div>",66:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype66\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut log is(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Alias of ut log output. Kept only for backwards compatibility.</div></div>",70:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype70\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut sorted(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sorts a list before passing to inner matcher.</div></div>",74:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype74\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut elapsed time(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Captures the amount of time it takes for the test expression to evaluate. Accurate up to the microsecond, but compares in seconds.</div></div>",78:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype78\" class=\"NDPrototype NoParameterForm\">ut missing()</div><div class=\"TTSummary\">Use when expected value should be missing (a dot! see ut is numeric missing).</div></div>",83:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype83\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut title(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Compare inner matcher to the result of sending the Get Title message to the result.</div></div>",84:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype84\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut text(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Compare inner matcher to the result of sending the Get Text message to the result.</div></div>",86:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype86\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut <span class=\"SHKeyword\">class</span> name(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Compare inner matcher to the result of sending the Class Name message to the result.</div></div>",87:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype87\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut name(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Compare inner matcher to the result of sending the Get Name message to the result.</div></div>",92:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype92\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut skip(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName\">matcher&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ut anything(),</td></tr><tr><td class=\"first\"></td><td class=\"PName\">why&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;&quot;</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Used to mark an expression you want to skip. Instead a success is reported. Usually, you want to give a reason why you are skipping.</div></div>",93:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype93\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut skip failing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName\">matcher&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ut anything()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Used to mark an expression you want to skip. Instead a failure is reported.</div></div>",94:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype94\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut skip succeeding(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName\">matcher&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ut anything()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Used to mark an expression you want to skip. Instead a success is reported.</div></div>",100:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype100\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut approx(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">number&nbsp;</td><td class=\"PName last\">val,</td></tr><tr><td class=\"PType first\">List&nbsp;</td><td class=\"PName last\">options&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns a success if the relative difference between expected and actual is within the relative epsilon for non-zero values and within zero epsilon if the expected or actual value is 0.</div></div>",101:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype101\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut approx digits(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">number&nbsp;</td><td class=\"PName last\">val,</td></tr><tr><td class=\"PType first\">number&nbsp;</td><td class=\"PName last\">digits&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns a success if the actual value matches the expected value up to N digits.</div></div>",102:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype102\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut min lre(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">number&nbsp;</td><td class=\"PName last\">val,</td></tr><tr><td class=\"PType first\">number&nbsp;</td><td class=\"PName last\">minLRE&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns a success if LRE of actual value and expected value is above a given threshold.</div></div>",106:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype106\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut os specific(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">List[UtOSMatcher]&nbsp;</td><td class=\"PName\">matchers,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PName\">default_matcher&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ut skip failing()</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Function to choose matcher based on the current operating system.</div></div>",107:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype107\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut on os(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">String&nbsp;</td><td class=\"PName last\">os,</td></tr><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">) ut on os( List[String] os, UtMatcher matcher )</td></tr></table></div><div class=\"TTSummary\">Only runs the test if on running on one of the specified operating systems. Returns a success if not running on a listed OS.</div></div>",111:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype111\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut as <span class=\"SHKeyword\">char</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Compares the given string to the actual value converted to character.</div></div>",115:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype115\" class=\"NDPrototype NoParameterForm\">ut valid xml()</div><div class=\"TTSummary\">Use when expected value should be valid XML.</div></div>",119:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype119\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut less than(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">object&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Factory function for UtOrderingComparisonMatcher.</div></div>",120:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype120\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut less than or equal to(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">object&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Factory function for UtOrderingComparisonMatcher.</div></div>",121:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype121\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut greater than(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">object&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Factory function for UtOrderingComparisonMatcher.</div></div>",122:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype122\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut greater than or equal to(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">object&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Factory function for UtOrderingComparisonMatcher.</div></div>",126:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype126\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut starts <span class=\"SHKeyword\">with</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">object&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Asserts using the Starts With() built-in function.</div></div>",127:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype127\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut ends <span class=\"SHKeyword\">with</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">object&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Asserts using the Ends With() built-in function.</div></div>",131:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype131\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut length(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Passes the Length() of the actual value to the inner matcher.</div></div>",132:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype132\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut n items(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Passes the N Items() of the actual value to the inner matcher.</div></div>",133:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype133\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut n cols(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Passes the N Cols() of the actual value to the inner matcher.</div></div>",134:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype134\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut n rows(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Passes the N Rows() of the actual value to the inner matcher.</div></div>",140:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype140\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut parsed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Compare an expression to a parsed string.</div></div>",141:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype141\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut parse error(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks that a given string throws an error when parsed.</div></div>",142:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype142\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut no parse error(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Checks that a given string parses successfully.</div></div>",146:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype146\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut equal to ignoring whitespace(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Collapses the whitespace of the actual expression.</div></div>",147:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype147\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut ignoring whitespace(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Collapses the whitespace of the actual expression only.</div></div>",151:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype151\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut equal to ignoring <span class=\"SHKeyword\">case</span>(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Compares actual value ingoring the case. This matcher requires the expected to be a string (and not a matcher).</div></div>",155:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype155\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut any of(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">List&lt;UtMatcher&gt;&nbsp;</td><td class=\"PName last\">matchers&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Matches the test expression with any matcher given in the list.</div></div>",159:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype159\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut every item(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Uses inner matcher on every item of a list or matrix.</div></div>",163:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype163\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut host specific(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtHostMatcher&nbsp;</td><td class=\"PName last\">matcher1,</td></tr><tr><td class=\"PType first\">UtHostMatcher&nbsp;</td><td class=\"PName last\">matcher2&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Chooses one of the two given matchers based on the current operating system.</div></div>",164:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype164\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut on windows(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Only runs the test if on a Windows host. Returns a success if running on a Mac.</div></div>",165:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype165\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut on mac(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName last\">matcher&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Only runs the test if on a Mac host. Returns a success if running on a Windows.</div></div>",166:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype166\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut host table name(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">name&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns an equal to matcher that converts a string to a host specific table name string.</div></div>",239:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype239\" class=\"NDPrototype NoParameterForm\">ut is()</div><div class=\"TTSummary\">A forwarding matcher to help when an &quot;is&quot; would help the assertion read more naturally.</div></div>",265:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype265\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut expression matches(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">expression&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Compare the actual expression to and expected expression, which itself can contain matchers or optional tokens. This can be very useful for size arguments that change based on the machine settings/font size or if there is a small difference in output between operating systems.</div></div>",266:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype266\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut equal to expression(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">expression&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Compares the expression using the built-in == operator. Available since ut equal to() matcher uses ut expression matches() by default.</div></div>",267:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype267\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut equal to(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">object&nbsp;</td><td class=\"PName last\">value&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Compares objects to see if they are equal to each other. Expressions and names with arguments default to the ut expression matches() matcher.</div></div>",278:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype278\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut assert that(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">expression&nbsp;</td><td class=\"PName\">test_expr,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName\">matcher,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">label&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;&quot;</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Assertion function that accepts matchers to determine successes and failures.</div></div>"});