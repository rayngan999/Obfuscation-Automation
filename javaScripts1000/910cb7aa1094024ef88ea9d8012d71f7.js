<!DOCTYPE html>
<html ng-app="liveForm" ng-controller="LiveFormCtrl" ng-cloak lang="{{formLanguage}}" >
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Form</title>
    <!-- enforce ng-cloak -->
    <style>
        [ng-cloak]{ display: none !important;}
    </style>
    <link rel="stylesheet" href="https://resources.digital-cloud-west.medallia.com/resources/dist/assets/css/liveform-web-vendor-7a445f15ef.css"/>

    <link rel="stylesheet" href="https://resources.digital-cloud-west.medallia.com/resources/dist/assets/css/kampyle/liveform-web-style-957737fe0c.css"/>


    <link rel="shortcut icon" href="resources/favicon.png" type="image/x-icon">
</head>

<body neb-live-form ng-class="::setFormLanguageClasses()">
<div ng-include="'https://resources.digital-cloud-west.medallia.com/resources/dist/assets/views/innerFormPartial-3134be8397.html'" />
<!-- we are using at specific url in order to delete this div element when build and using it for  local-->

<script type="text/javascript">
  var formJson = {
  "name" : "Intheswim.com Always On",
  "id" : 3457,
  "creationDate" : 1618950531968,
  "formChangeTime" : 1626712050792,
  "triggers" : [ {
    "triggerType" : ".ButtonContract",
    "id" : 62070,
    "rules" : { },
    "displayType" : "lightbox",
    "displayDirection" : "centerRight",
    "isSelfHosted" : null,
    "selfHostedUrl" : null,
    "formId" : 3457,
    "isPartialTranslated" : null,
    "currentVersion" : null,
    "type" : "VERTICAL",
    "buttonBackgroundColor" : "#0154a0",
    "buttonText" : "Feedback",
    "buttonTextColor" : "#ffffff",
    "buttonImageUrl" : {
      "name" : null,
      "uuid" : null,
      "url" : null,
      "resourceId" : null
    },
    "position" : "RIGHT",
    "cornerMargin" : 0.0,
    "verticalOffset" : 0.0,
    "zIndex" : null,
    "buttonBackgroundHoverColor" : null,
    "buttonTextHoverColor" : null
  } ],
  "published" : true,
  "isDeleted" : false,
  "isLocked" : false,
  "advancedFormData" : {
    "customParametersInUse" : [ ]
  },
  "customHTMLEnabled" : false,
  "templateVersion" : 2,
  "folderId" : 665,
  "uuid" : "fa333757-ec28-2377-e7f7-5ef867efbae9",
  "pages" : [ {
    "name" : "Page 1",
    "index" : 0,
    "dynamicData" : [ {
      "id" : 96851,
      "unique_name" : "Page 1 image 84702",
      "component" : "image",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "Image",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : null,
      "position" : null,
      "descriptionWithCP" : null,
      "index" : 0,
      "nebUuid" : "cbd4-4659-8be5-4f12-a0b1-f523-df8f-277e",
      "labelContent" : "",
      "cdSource" : null,
      "conditionalDisplay" : null,
      "ecKey" : null,
      "ecFriendlyName" : null,
      "ecOptionsChanged" : null,
      "screenCaptureDynamicFieldContract" : null,
      "mediaCaptureDynamicFieldContract" : null,
      "score" : 1,
      "other" : {
        "display" : true,
        "editable" : true,
        "required" : false,
        "max_chars" : "",
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "center",
        "border_style" : "",
        "kampyleGroup" : "NoInputGroup",
        "num_of_lines" : "",
        "borderOptions" : "",
        "componentType" : "",
        "ratingOptions" : {
          "emoticons" : [ {
            "stateOn" : "kIcon rating-emoticon-1",
            "stateOff" : "kIcon rating-emoticon-1-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-2",
            "stateOff" : "kIcon rating-emoticon-2-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-3",
            "stateOff" : "kIcon rating-emoticon-3-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-4",
            "stateOff" : "kIcon rating-emoticon-4-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-5",
            "stateOff" : "kIcon rating-emoticon-5-off"
          } ]
        },
        "ratingViewType" : "",
        "uploadedResource" : {
          "url" : "https://resources.digital-cloud-west.medallia.com/wdcwest/57192/resources/image/1625858062572_log_its_medallia.jpg",
          "name" : "log_its_medallia.jpg",
          "uuid" : "",
          "resourceId" : null
        }
      },
      "imageObject" : null,
      "uploadedResource" : {
        "name" : "log_its_medallia.jpg",
        "uuid" : "",
        "url" : "https://resources.digital-cloud-west.medallia.com/wdcwest/57192/resources/image/1625858062572_log_its_medallia.jpg",
        "resourceId" : null
      },
      "image_url" : {
        "url" : "https://resources.digital-cloud-west.medallia.com/wdcwest/57192/resources/image/1625858062572_log_its_medallia.jpg",
        "name" : "log_its_medallia.jpg",
        "uuid" : "",
        "resourceId" : null
      },
      "customLabels" : null,
      "display" : true,
      "editable" : true,
      "required" : false,
      "max_chars" : "",
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "center",
      "border_style" : "",
      "kampyleGroup" : "NoInputGroup",
      "num_of_lines" : "",
      "borderOptions" : "",
      "componentType" : "",
      "ratingOptions" : {
        "emoticons" : [ {
          "stateOn" : "kIcon rating-emoticon-1",
          "stateOff" : "kIcon rating-emoticon-1-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-2",
          "stateOff" : "kIcon rating-emoticon-2-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-3",
          "stateOff" : "kIcon rating-emoticon-3-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-4",
          "stateOff" : "kIcon rating-emoticon-4-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-5",
          "stateOff" : "kIcon rating-emoticon-5-off"
        } ]
      },
      "ratingViewType" : "",
      "uploadedResource" : {
        "url" : "https://resources.digital-cloud-west.medallia.com/wdcwest/57192/resources/image/1625858062572_log_its_medallia.jpg",
        "name" : "log_its_medallia.jpg",
        "uuid" : "",
        "resourceId" : null
      }
    }, {
      "id" : 62075,
      "unique_name" : "Satisfaction with Digital Experience",
      "component" : "grading0to10",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "Overall, how satisfied are you with the website?",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : null,
      "position" : null,
      "descriptionWithCP" : null,
      "index" : 1,
      "nebUuid" : "1309-b071-ff4d-6ecc-b3e4-247f-9e84-cca5",
      "labelContent" : "",
      "cdSource" : null,
      "conditionalDisplay" : null,
      "ecKey" : null,
      "ecFriendlyName" : null,
      "ecOptionsChanged" : null,
      "screenCaptureDynamicFieldContract" : null,
      "mediaCaptureDynamicFieldContract" : null,
      "score" : 1,
      "other" : {
        "display" : true,
        "editable" : true,
        "required" : true,
        "max_chars" : "",
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "RatingGroup",
        "num_of_lines" : "Please Select Option",
        "borderOptions" : "",
        "componentType" : "grading0to10",
        "ratingOptions" : {
          "emoticons" : [ {
            "stateOn" : "kIcon rating-emoticon-1",
            "stateOff" : "kIcon rating-emoticon-1-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-2",
            "stateOff" : "kIcon rating-emoticon-2-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-3",
            "stateOff" : "kIcon rating-emoticon-3-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-4",
            "stateOff" : "kIcon rating-emoticon-4-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-5",
            "stateOff" : "kIcon rating-emoticon-5-off"
          } ]
        },
        "ratingViewType" : "numbersSquare",
        "selectionStyle" : {
          "value" : "accumulate",
          "options" : [ {
            "icon" : "neb-icon-accumulative-select",
            "label" : "Accumulative",
            "value" : "accumulate"
          }, {
            "icon" : "neb-icon-single-select",
            "label" : "Single select",
            "value" : "single"
          } ]
        },
        "uploadedResource" : null,
        "ratingScalesValues" : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
        "shouldShowAriaLabelInRating" : true
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : [ "Not at all satisfied", "", "", "", "", "", "", "", "", "", "Completely satisfied" ],
      "display" : true,
      "editable" : true,
      "required" : true,
      "max_chars" : "",
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "RatingGroup",
      "num_of_lines" : "Please Select Option",
      "borderOptions" : "",
      "componentType" : "grading0to10",
      "ratingOptions" : {
        "emoticons" : [ {
          "stateOn" : "kIcon rating-emoticon-1",
          "stateOff" : "kIcon rating-emoticon-1-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-2",
          "stateOff" : "kIcon rating-emoticon-2-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-3",
          "stateOff" : "kIcon rating-emoticon-3-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-4",
          "stateOff" : "kIcon rating-emoticon-4-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-5",
          "stateOff" : "kIcon rating-emoticon-5-off"
        } ]
      },
      "ratingViewType" : "numbersSquare",
      "selectionStyle" : {
        "value" : "accumulate",
        "options" : [ {
          "icon" : "neb-icon-accumulative-select",
          "label" : "Accumulative",
          "value" : "accumulate"
        }, {
          "icon" : "neb-icon-single-select",
          "label" : "Single select",
          "value" : "single"
        } ]
      },
      "uploadedResource" : null,
      "ratingScalesValues" : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
      "shouldShowAriaLabelInRating" : true
    }, {
      "id" : 62076,
      "unique_name" : "Reason for Visit",
      "component" : "select",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Browse / Discover new products"
      }, {
        "id" : "2",
        "label" : "Purchase a specific product"
      }, {
        "id" : "3",
        "label" : "Find product information"
      }, {
        "id" : "4",
        "label" : "Get advice"
      }, {
        "id" : "5",
        "label" : "Buy a gift"
      }, {
        "id" : "6",
        "label" : "Update my account"
      }, {
        "id" : "99",
        "label" : "Other"
      } ],
      "label" : "What was the main purpose for your visit today?",
      "description" : "",
      "placeholder" : "Please Select Option",
      "labelWithCP" : null,
      "position" : null,
      "descriptionWithCP" : null,
      "index" : 2,
      "nebUuid" : "fb9a-655a-db5c-923c-d290-e291-c002-ddf8",
      "labelContent" : "",
      "cdSource" : null,
      "conditionalDisplay" : null,
      "ecKey" : null,
      "ecFriendlyName" : null,
      "ecOptionsChanged" : null,
      "screenCaptureDynamicFieldContract" : null,
      "mediaCaptureDynamicFieldContract" : null,
      "score" : 1,
      "other" : {
        "display" : true,
        "editable" : true,
        "required" : false,
        "currentId" : 2,
        "max_chars" : "",
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "SelectionGroup",
        "num_of_lines" : "",
        "borderOptions" : "",
        "componentType" : "",
        "ratingOptions" : {
          "emoticons" : [ {
            "stateOn" : "kIcon rating-emoticon-1",
            "stateOff" : "kIcon rating-emoticon-1-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-2",
            "stateOff" : "kIcon rating-emoticon-2-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-3",
            "stateOff" : "kIcon rating-emoticon-3-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-4",
            "stateOff" : "kIcon rating-emoticon-4-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-5",
            "stateOff" : "kIcon rating-emoticon-5-off"
          } ]
        },
        "ratingViewType" : "numbersSquare",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : null,
      "display" : true,
      "editable" : true,
      "required" : false,
      "currentId" : 2,
      "max_chars" : "",
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "SelectionGroup",
      "num_of_lines" : "",
      "borderOptions" : "",
      "componentType" : "",
      "ratingOptions" : {
        "emoticons" : [ {
          "stateOn" : "kIcon rating-emoticon-1",
          "stateOff" : "kIcon rating-emoticon-1-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-2",
          "stateOff" : "kIcon rating-emoticon-2-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-3",
          "stateOff" : "kIcon rating-emoticon-3-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-4",
          "stateOff" : "kIcon rating-emoticon-4-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-5",
          "stateOff" : "kIcon rating-emoticon-5-off"
        } ]
      },
      "ratingViewType" : "numbersSquare",
      "uploadedResource" : null
    }, {
      "id" : 62077,
      "unique_name" : "Other Reason for Visit",
      "component" : "textInput",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "Please specify:",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : "",
      "position" : null,
      "descriptionWithCP" : "",
      "index" : 3,
      "nebUuid" : "f3e3-f7ab-f19b-34ee-daca-1da8-af96-28cd",
      "labelContent" : "",
      "cdSource" : {
        "value" : "99",
        "nebUuid" : "fb9a-655a-db5c-923c-d290-e291-c002-ddf8",
        "operator" : "Equals",
        "componentType" : "select"
      },
      "conditionalDisplay" : null,
      "ecKey" : null,
      "ecFriendlyName" : null,
      "ecOptionsChanged" : null,
      "screenCaptureDynamicFieldContract" : null,
      "mediaCaptureDynamicFieldContract" : null,
      "score" : 1,
      "other" : {
        "display" : true,
        "editable" : true,
        "required" : false,
        "max_chars" : 50,
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "InputGroup",
        "num_of_lines" : "",
        "borderOptions" : "",
        "componentType" : "",
        "ratingOptions" : {
          "emoticons" : [ {
            "stateOn" : "kIcon rating-emoticon-1",
            "stateOff" : "kIcon rating-emoticon-1-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-2",
            "stateOff" : "kIcon rating-emoticon-2-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-3",
            "stateOff" : "kIcon rating-emoticon-3-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-4",
            "stateOff" : "kIcon rating-emoticon-4-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-5",
            "stateOff" : "kIcon rating-emoticon-5-off"
          } ]
        },
        "ratingViewType" : "numbersSquare",
        "useCustomParams" : false,
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : null,
      "display" : true,
      "editable" : true,
      "required" : false,
      "max_chars" : 50,
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "InputGroup",
      "num_of_lines" : "",
      "borderOptions" : "",
      "componentType" : "",
      "ratingOptions" : {
        "emoticons" : [ {
          "stateOn" : "kIcon rating-emoticon-1",
          "stateOff" : "kIcon rating-emoticon-1-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-2",
          "stateOff" : "kIcon rating-emoticon-2-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-3",
          "stateOff" : "kIcon rating-emoticon-3-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-4",
          "stateOff" : "kIcon rating-emoticon-4-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-5",
          "stateOff" : "kIcon rating-emoticon-5-off"
        } ]
      },
      "ratingViewType" : "numbersSquare",
      "useCustomParams" : false,
      "uploadedResource" : null
    }, {
      "id" : 62078,
      "unique_name" : "Complete Purpose",
      "component" : "radio",
      "role" : null,
      "options" : null,
      "optionsById" : [ {
        "id" : "1",
        "label" : "Yes"
      }, {
        "id" : "2",
        "label" : "No"
      }, {
        "id" : "3",
        "label" : "Not done yet"
      } ],
      "label" : "Were you able to complete your primary purpose for today's visit?",
      "description" : "",
      "placeholder" : "checkbox-inline",
      "labelWithCP" : null,
      "position" : "horizontal",
      "descriptionWithCP" : null,
      "index" : 4,
      "nebUuid" : "4cfa-39cb-340e-792a-b287-bfc5-082f-b132",
      "labelContent" : "",
      "cdSource" : null,
      "conditionalDisplay" : null,
      "ecKey" : null,
      "ecFriendlyName" : null,
      "ecOptionsChanged" : null,
      "screenCaptureDynamicFieldContract" : null,
      "mediaCaptureDynamicFieldContract" : null,
      "score" : 1,
      "other" : {
        "display" : true,
        "editable" : true,
        "required" : false,
        "currentId" : 2,
        "max_chars" : "",
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "SelectionGroup",
        "num_of_lines" : "",
        "borderOptions" : "",
        "componentType" : "",
        "ratingOptions" : {
          "emoticons" : [ {
            "stateOn" : "kIcon rating-emoticon-1",
            "stateOff" : "kIcon rating-emoticon-1-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-2",
            "stateOff" : "kIcon rating-emoticon-2-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-3",
            "stateOff" : "kIcon rating-emoticon-3-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-4",
            "stateOff" : "kIcon rating-emoticon-4-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-5",
            "stateOff" : "kIcon rating-emoticon-5-off"
          } ]
        },
        "ratingViewType" : "numbersSquare",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : null,
      "display" : true,
      "editable" : true,
      "required" : false,
      "currentId" : 2,
      "max_chars" : "",
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "SelectionGroup",
      "num_of_lines" : "",
      "borderOptions" : "",
      "componentType" : "",
      "ratingOptions" : {
        "emoticons" : [ {
          "stateOn" : "kIcon rating-emoticon-1",
          "stateOff" : "kIcon rating-emoticon-1-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-2",
          "stateOff" : "kIcon rating-emoticon-2-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-3",
          "stateOff" : "kIcon rating-emoticon-3-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-4",
          "stateOff" : "kIcon rating-emoticon-4-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-5",
          "stateOff" : "kIcon rating-emoticon-5-off"
        } ]
      },
      "ratingViewType" : "numbersSquare",
      "uploadedResource" : null
    }, {
      "id" : 62079,
      "unique_name" : "Open Comment",
      "component" : "textArea",
      "role" : null,
      "options" : [ ],
      "optionsById" : null,
      "label" : "Please share your feedback:",
      "description" : "",
      "placeholder" : "",
      "labelWithCP" : null,
      "position" : null,
      "descriptionWithCP" : null,
      "index" : 5,
      "nebUuid" : "e1ca-0204-a627-f564-b039-3aa9-325f-53a2",
      "labelContent" : "",
      "cdSource" : null,
      "conditionalDisplay" : null,
      "ecKey" : null,
      "ecFriendlyName" : null,
      "ecOptionsChanged" : null,
      "screenCaptureDynamicFieldContract" : null,
      "mediaCaptureDynamicFieldContract" : null,
      "score" : 1,
      "other" : {
        "display" : true,
        "editable" : true,
        "required" : false,
        "max_chars" : "",
        "thickness" : "",
        "custom_css" : "",
        "validation" : "/.*/",
        "date_format" : "",
        "imageObject" : null,
        "image_align" : "",
        "border_style" : "",
        "kampyleGroup" : "InputGroup",
        "num_of_lines" : 3,
        "borderOptions" : "",
        "componentType" : "",
        "ratingOptions" : {
          "emoticons" : [ {
            "stateOn" : "kIcon rating-emoticon-1",
            "stateOff" : "kIcon rating-emoticon-1-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-2",
            "stateOff" : "kIcon rating-emoticon-2-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-3",
            "stateOff" : "kIcon rating-emoticon-3-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-4",
            "stateOff" : "kIcon rating-emoticon-4-off"
          }, {
            "stateOn" : "kIcon rating-emoticon-5",
            "stateOff" : "kIcon rating-emoticon-5-off"
          } ]
        },
        "ratingViewType" : "numbersSquare",
        "uploadedResource" : null
      },
      "imageObject" : null,
      "uploadedResource" : null,
      "image_url" : "",
      "customLabels" : null,
      "display" : true,
      "editable" : true,
      "required" : false,
      "max_chars" : "",
      "thickness" : "",
      "custom_css" : "",
      "validation" : "/.*/",
      "date_format" : "",
      "imageObject" : null,
      "image_align" : "",
      "border_style" : "",
      "kampyleGroup" : "InputGroup",
      "num_of_lines" : 3,
      "borderOptions" : "",
      "componentType" : "",
      "ratingOptions" : {
        "emoticons" : [ {
          "stateOn" : "kIcon rating-emoticon-1",
          "stateOff" : "kIcon rating-emoticon-1-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-2",
          "stateOff" : "kIcon rating-emoticon-2-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-3",
          "stateOff" : "kIcon rating-emoticon-3-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-4",
          "stateOff" : "kIcon rating-emoticon-4-off"
        }, {
          "stateOn" : "kIcon rating-emoticon-5",
          "stateOff" : "kIcon rating-emoticon-5-off"
        } ]
      },
      "ratingViewType" : "numbersSquare",
      "uploadedResource" : null
    } ],
    "pageSettings" : {
      "backgroundColor" : "",
      "backgroundImgUrl" : null,
      "doBackgroundReapet" : false,
      "customCssClass" : ""
    }
  } ],
  "settings" : {
    "formBasicSettings" : {
      "widthPX" : 450,
      "heightPX" : 450,
      "nextButtonLabel" : "Next",
      "nextButtoncolor" : "#004ccb",
      "backButtonLabel" : "Back",
      "backButtoncolor" : "#004ccb",
      "closeButtonLabel" : "Close",
      "closeButtoncolor" : "#4d4d51",
      "submitButtonLabel" : "Submit",
      "submitButtoncolor" : "#0154a0",
      "isFixedSize" : false,
      "nextButtonTextColor" : null,
      "backButtonTextColor" : null,
      "closeButtonTextColor" : "",
      "submitButtonTextColor" : "",
      "htmlLanguage" : null,
      "isShowCloseButton" : true,
      "isShowBackButton" : false,
      "isFullWidthEmbedded" : null,
      "navigationButtons" : "Close + Submit",
      "transitionType" : null,
      "closeModalButton" : "Close Survey",
      "formAnnouncement" : "Feedback Survey"
    },
    "formDesignSettings" : {
      "logoURL" : null,
      "backgroundImgUrl" : {
        "name" : "",
        "uuid" : "",
        "url" : "",
        "resourceId" : null
      },
      "doReapet" : false,
      "customCssFile" : "",
      "customCssFileResource" : null,
      "theme" : null,
      "backgroundColor" : "",
      "textColor" : "#40404a",
      "doCover" : false
    },
    "formThankYouPageSettings" : {
      "includeThankYouPage" : true,
      "logoURL" : {
        "name" : "",
        "uuid" : "",
        "url" : "",
        "resourceId" : null
      },
      "headline" : "Thank You For Providing Feedback",
      "collectUserDetails" : false,
      "ContactDetailsText" : null,
      "nameTitle" : null,
      "emailTitle" : null,
      "phoneTitle" : null,
      "backgroundColor" : "",
      "buttonColor" : "#0154a0",
      "textColor" : "#ffffff",
      "closeButtonLabel" : "Close",
      "isShowCloseButton" : null,
      "closeModalButton" : "Close Survey",
      "logoLabel" : "",
      "thankYouPageAnnouncement" : "Survey completion message",
      "contactDetailsText" : null
    },
    "formAdvanceSettings" : {
      "requiredErrorMsg" : "This Field is Required.",
      "emailValidationErrorMsg" : "A valid email address is required. For example: 'name@example.com'",
      "htmlLanguage" : "en",
      "isCustomParamEnabled" : false,
      "isRtl" : null
    },
    "formScreenCaptureSettings" : {
      "enabled" : true,
      "screenCaptureAsComponentEnabled" : true,
      "buttonImage" : {
        "name" : "",
        "uuid" : "",
        "url" : "",
        "resourceId" : null
      },
      "buttonTooltip" : "Attach a Screen Capture to your feedback",
      "submitScreenCaptureLabel" : "Capture Image",
      "submitScreenCaptureTooltip" : "Take snapshot",
      "cancelScreenCaptureLabel" : "Cancel",
      "titleInstructionsScreenCapture" : "Screen Capture",
      "bodyInstructionsScreenCapture" : "Click \"Capture Image\" button or drag the cursor to highlight a specific area",
      "cancelScreenCaptureTooltip" : "Back to Feedback",
      "instructionsScreenCapture" : "&ltp style=\"text-align:center;&gt &ltspan style=\"font-size:16px; font-family: 'Open Sans';\"&gt &ltstrong&gtScreen Capture&lt/strong&gt &lt/span&gt &lt/p&gt &ltp style=\"text-align:center; font-size:12px; font-family: 'Open Sans';\"&gt Click Capture Image button or drag the cursor to highlight a specific area. &lt/p&gt",
      "wcagDisabledScreenCaptureTooltip" : "Feedback Screen Capture Button Disabled",
      "wcagScreenCaptureTooltip" : "Feedback Screen Capture Button"
    },
    "formMobileSettingsContract" : {
      "title" : null,
      "formViewType" : "full",
      "titleTextColor" : "",
      "titleBackgroundColor" : "",
      "uiRevamp" : null,
      "newAndroidButton" : null,
      "wcagSupport" : null,
      "showPoweredBy" : null,
      "actualViewType" : "full"
    },
    "formMobileThankYouPromptSettingsContract" : {
      "showThankYouPrompt" : null,
      "promptDuration" : null,
      "isStickyPrompt" : null,
      "isImageDisplay" : null,
      "mobileThankYouPromptImageDataContract" : {
        "name" : "",
        "uuid" : "",
        "url" : "",
        "resourceId" : null
      },
      "mobileThankYouPromptGeneralSettingsSectionContract" : {
        "textContent" : null,
        "bodyContent" : null,
        "promptContentFontColor" : null,
        "promptContentFontType" : null,
        "backgroundColor" : null
      },
      "mobileThankYouPromptButtonSectionContract" : {
        "buttonDisplayed" : null,
        "buttonText" : null,
        "buttonTextColor" : null,
        "buttonColor" : null
      },
      "mobileThankYouAccessibilitySectionContract" : {
        "imageAltText" : null,
        "closeButtonAltText" : null
      }
    },
    "formLocalizationSettings" : {
      "defaultLanguage" : "en",
      "useCustomParam" : false,
      "customParam" : null
    }
  },
  "customHTML" : {
    "customHTMLName" : null,
    "customHTMLModificationTime" : null,
    "tempCustomHTMLFileId" : null,
    "customHtmlFileResource" : null
  },
  "propertyType" : "website"
};
  var kplConfig = {
    prefix: 'https://resources.digital-cloud-west.medallia.com/',
    resourcesPrefix: 'resources/form/FormBuilder/',
    submitUrlPrefix: 'https://feedback.digital-cloud-west.medallia.com/',
    submitUrlSuffix: 'feedback/api/feedback/submit',
    submitUrlWithBackendUUID: 'https://feedback.digital-cloud-west.medallia.com/feedback/api/v2/feedback/submit'
  };

  function closeWindow() {
    window.close();
  }
  window.exports = window.exports || {}
</script>

<script src="https://resources.digital-cloud-west.medallia.com/resources/dist/assets/js/liveform-web-vendor-fba5f1656e.js"></script>

<script src="https://resources.digital-cloud-west.medallia.com/resources/dist/assets/js/liveform-web-app-cde67310ff.js"></script>

</body>

</html>
