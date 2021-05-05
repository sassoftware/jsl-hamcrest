NDSummary.OnToolTipsLoaded("File:Core/Utils.jsl",{315:"<div class=\"NDToolTip TVariable LJSL\"><div class=\"TTSummary\">List of head expressions for all matcher functions.</div></div>",317:"<div class=\"NDToolTip TVariable LJSL\"><div class=\"TTSummary\">Only overwritten if not already set. Default is 1.</div></div>",319:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype319\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut matcher factory(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">String&nbsp;</td><td class=\"PName\">name,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">Function&nbsp;</td><td class=\"PName\">func,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">String&nbsp;</td><td class=\"PName\">prototype&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;&quot;</span>,</td></tr><tr><td class=\"PType first\">String&nbsp;</td><td class=\"PName\">description&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;&quot;</span>,</td></tr><tr><td class=\"PType first\">List&lt;List&gt;&nbsp;</td><td class=\"PName\">examples&nbsp;</td><td></td><td class=\"last\"></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Function used to insert their names into the ut matcher factories list.</div></div>",320:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Define a documented function in the Scripting Index</div></div>",321:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">This determines (through duck typing) if the given object is likely a matcher.</div></div>",322:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Conditionally wraps its argument so that the output is always a matcher. Does nothing if the argument is already a matcher.&nbsp; Wraps with the &lt;Ut Equal To Matcher&gt; otherwise. Often used in matcher factory functions.</div></div>",323:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype323\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut ensure matcher list(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">List&lt;UtMatcher&gt;&nbsp;</td><td class=\"PName last\">maybe_matchers&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Convert a list of expressions to a list of matchers based on their head expressions.</div></div>",324:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Redefine ut global lre to customize how LRE is computed. Default behavior is to always return missing (LRE unsupported).</div></div>",325:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Removes a matcher factory name from ut matcher factories.</div></div>",326:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Temprorarily sets ut global reporter to the given reporter and resets it back to its original state, even if the expression threw an error.</div></div>",328:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Takes the exception_msg variable as an argument and extracts the expression being executed from the list. If the expression cannot be found, it returns Expr( Unknown Expression ).</div></div>",329:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Get just the first string portion of the exception_msg. If it is just a string, return that.</div></div>",330:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Returns true when two objects are of the same type.&nbsp; This function considers Integers and Numbers to be of the same type.</div></div>",331:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Returns true only if the argument has the value . (dot)</div></div>",332:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Compares two values and returns true if they are equal.</div></div>",333:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Converts non-string values to character.&nbsp; If the value is a string, double quotes are concatenated to the beginning and end. This is used for showing values in expected and actual results.</div></div>",334:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Checks if the given object allows for receiving a given message.</div></div>",335:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Get\'s the type with extra info where appropriate.</div></div>",336:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Give it the windows table and get back a host specific data table name. (i.e. it appends &quot;.jmp&quot; on Mac to a given string)</div></div>",337:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Converts any value into an expression by wrapping it in Glue().</div></div>",338:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Wraps the given literal value in an expression.</div></div>",339:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype339\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut <span class=\"SHKeyword\">new</span> object(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">String&nbsp;</td><td class=\"PName\">class_name,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">List&nbsp;</td><td class=\"PName\">args&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">{}</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a new object with a self reference.</div></div>",343:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Concatenates values together for &lt;ut test&gt;</div></div>",344:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Merges all expressions in a given list with a single glue expression.</div></div>",345:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Takes a namespace and moves all args with values to a new anonymous namespace and removes them from the given namespace.</div></div>",346:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Returns items in listB NOT in listA.</div></div>",347:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">An associative array with information</div></div>",348:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Deletes symbols in after list not in before list</div></div>",350:"<div class=\"NDToolTip TVariable LJSL\"><div class=\"TTSummary\">Expression to get the code for the current language (en, de, es, fr, it, ja, ko, zh-CN)</div></div>",352:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype352\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut localize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">AssociativeArray&nbsp;</td><td class=\"PName last\">aa,</td></tr><tr><td class=\"PType first\">String&nbsp;</td><td class=\"PName last\">lang&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Returns a string from the input associative array based on the current language code</div></div>",353:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Looks for files in a folder recursively and uses the Include() function to run them.</div></div>",355:"<div class=\"NDToolTip TVariable LJSL\"><div class=\"TTSummary\">Can be used to supress printing anything to the log when returning from a function</div></div>"});