const ids = {
    TIMER : "timerCountdown",
    QUESTION_AND_OPTIONS : "questionAndOptions",
    OPTIONS_WRAPPER : "questionAndOptionsOptionsWrapper",
    QUESTION_NUMBER : "questionAndOptionsQuestionNumber",
    QUESTION_TEXT : "questionText",
    PREV_BUTTON : "questionBottomButtonsPrevButton",
    CLEAR_BUTTON : "questionBottomButtonsClearButton",
    MARK_BUTTON : "questionBottomButtonsMarkButton",
    NEXT_BUTTON : "questionBottomButtonsNextButton",
    END_BUTTON : "quizEndButton",
    QUESTION_SELECTOR_GRID : "quizNavQuestionSelectorBlock"
}

const classNames = {
    CONTAINER : "container",
    QUIZ_WRAPPER : "quizAttemptWrapper",
    LEFT_VIEW_WRAPPER : "leftViewWrapper",
    QUIZ_HEADER : "quizHeader",
    APP_LOGO : "quizAppTitle",
    OPTION : "questionAndOptionsOption",
    OPTION_RADIO_BUTTON : "questionAndOptionsOptionSelector",
    OPTION_TEXT : "questionAndOptionsOptionText",
    QUESTION_WRAPPER : "questionAndOptionsQuestion",
    BOTTOM_BUTTONS_WRAPPER : "questionBottomButtonsWrapper",
    CLEAR_MARK_NEXT_BUTTON : "questionBottomButtonsClearMarkNextButtonWrapper",
    NAV_WRAPPER : "quizNavWrapper",
    SECTION_INFO : "quizNavSectionInfo",
    SECTION_NAME : "quizNavSectionName",
    END_TEST : "quizEndTest",
    QUIZ_TITLE : "quizTitle",
    SECTION_SUMMARY_ROW : "quizNavSectionSummaryRow",
    SECTION_SUMMARY : "quizNavSectionSummary",
    SECTION_SUMMARY_TEXT : "quizNavSectionSummaryText",
    QUESTION_SELECTOR : "quizNavQuestionSelector",
    COLORED_BOOKMARK_ICON : "bookmarkIcon",
    ANSWERED_QUESTION_SELECTOR : "answeredQuestionSelectorColor",
    UNANSWERED_QUESTION_SELECTOR : "unansweredQuestionSelectorColor"
}

const classLists = {
    PREV_ICON : ["fa","fa-chevron-circle-left","prevButtonIcon"],
    MARK_ICON : ["fa","fa-bookmark-o","markButtonIcon"],
    NEXT_ICON : ["fa","fa-chevron-circle-right","nextButtonIcon"]
}

const dataLinks = {
    MATHS : "./JSON/questions.json"
}

export {ids, classNames, classLists, dataLinks};