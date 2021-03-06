var booleanAttributes = [
    "translate",
    "hidden",
    "draggable",
    "isContentEditable",
    "spellcheck",
    "disabled",
    "disabled",
    "reversed",
    "isMap",
    "complete",
    "typeMustMatch",
    "willValidate",
    "default",
    "bufferingThrottled",
    "seeking",
    "paused",
    "ended",
    "autoplay",
    "loop",
    "controls",
    "muted",
    "defaultMuted",
    "enabled",
    "selected",
    "paused",
    "muted",
    "pauseOnExit",
    "noValidate",
    "autofocus",
    "defaultChecked",
    "checked",
    "disabled",
    "formNoValidate",
    "indeterminate",
    "multiple",
    "readOnly",
    "required",
    "willValidate",
    "autofocus",
    "disabled",
    "formNoValidate",
    "willValidate",
    "autofocus",
    "disabled",
    "multiple",
    "required",
    "willValidate",
    "disabled",
    "disabled",
    "defaultSelected",
    "selected",
    "autofocus",
    "disabled",
    "readOnly",
    "required",
    "willValidate",
    "autofocus",
    "disabled",
    "willValidate",
    "willValidate",
    "disabled",
    "willValidate",
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooLong",
    "tooShort",
    "rangeUnderflow",
    "rangeOverflow",
    "stepMismatch",
    "badInput",
    "customError",
    "valid",
    "async",
    "defer",
    "closed",
    "visible",
    "persisted",
    "onLine",
    "cookieEnabled",
    "javaEnabled",
    "trueSpeed",
    "noResize",
    "noHref",
    "compact",
    "compact",
    "noShade",
    "declare",
    "compact",
    "noWrap",
    "compact"
];

module.exports = function isbooleanAttribute (attr) {
    return booleanAttributes.indexOf(attr) !== -1;
};
