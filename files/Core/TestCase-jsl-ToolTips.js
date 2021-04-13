NDContentPage.OnToolTipsLoaded({212:"<div class=\"NDToolTip TClass LJSL\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype212\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">UtReporter</div></div></div><div class=\"TTSummary\">NoOp base class for assertion reporters. Specialize to determine how ut assert that will report success and failure.</div></div>",223:"<div class=\"NDToolTip TClass LJSL\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype223\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">UtMatcher</div></div></div><div class=\"TTSummary\">Base class for all matchers. If a function requires a matcher as an argument, it can be either an explicit matcher or a literal value. The literal value will be converted to an equal to matcher.</div></div>",252:"<div class=\"NDToolTip TConstant LJSL\"><div class=\"TTSummary\">Redefine ut global reporter to customize how assert successes and failures are reported when using ut assert that.</div></div>",295:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Concatenates values together for &lt;ut test&gt;</div></div>",309:"<div class=\"NDToolTip TClass LJSL\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype309\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">UtTestCaseFixture</div></div></div><div class=\"TTSummary\">Holds information about a Test Case.</div></div>",320:"<div class=\"NDToolTip TClass LJSL\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype320\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">UtLogBenchmark</div></div></div><div class=\"TTSummary\">Holds log benchmarking information for use in &lt;ut test&gt;.</div></div>",323:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Used to isolate a test case from other code in the test file.&nbsp; Also prepends the name of the test and assert number to the beginning of the labels for ut assert that.</div></div>",328:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype328\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut test(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtTestCaseFixture&nbsp;</td><td class=\"PName\">test_case,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">test_name,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">expression&nbsp;</td><td class=\"PName\">test_expr,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">UtLogBenchmark&nbsp;</td><td class=\"PName\">log_benchmark&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ut log bench( <span class=\"SHNumber\">1</span>, <span class=\"SHString\">&quot;&quot;</span> )</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Run a test expression. Runs any given setup and tear down expressions.&nbsp; Reports any unexpected exceptions as failures.</div></div>",329:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype329\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut log bench(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">integer</span>&nbsp;</td><td class=\"PName\">do_log_bench&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ut_log_bench_default,</td></tr><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName\">matcher&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;&quot;</span></td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">do log bench args -&nbsp; 0: Capture the log and throw it away (no benchmark, matcher not run) -&nbsp; 1: Capture the log and assert that contents satisfy the matcher - -1: Do not capture the log (no benchmark, matcher not run)</div></div>",});