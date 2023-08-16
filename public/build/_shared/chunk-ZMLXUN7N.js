import {
  LinkHighlighted
} from "http://localhost:3001/build/_shared/chunk-EOXYKIW2.js";
import {
  GenIcon,
  MdCheck,
  MdDirectionsCarFilled,
  MdPerson2,
  MdWaterDrop
} from "http://localhost:3001/build/_shared/chunk-DXSXC535.js";
import {
  AbsoluteCenter,
  Alert,
  AlertIcon,
  Box,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useSteps
} from "http://localhost:3001/build/_shared/chunk-WSTLIJHY.js";
import {
  useFetcher as useFetcher2
} from "http://localhost:3001/build/_shared/chunk-ANXL52AQ.js";
import {
  Link,
  init_dist2 as init_dist,
  useFetcher,
  useSearchParams
} from "http://localhost:3001/build/_shared/chunk-6SJDMTBK.js";
import {
  require_jsx_runtime
} from "http://localhost:3001/build/_shared/chunk-OKS54H4S.js";
import {
  require_react
} from "http://localhost:3001/build/_shared/chunk-3YOGVSK4.js";
import {
  createHotContext
} from "http://localhost:3001/build/_shared/chunk-KFR6H6JJ.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process
} from "http://localhost:3001/build/_shared/chunk-CT6324V4.js";

// app/components/NewWashModal/Stepper/index.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// node_modules/react-icons/go/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function GoOrganization(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M6.25 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM5.5 9.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM6.25 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM9 12.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm.75-4.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5ZM9 5.75A.75.75 0 0 1 9.75 5h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 9 5.75ZM13.25 12a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Zm-.75-2.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM13.25 5a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5h-.5Z" } }, { "tag": "path", "attr": { "d": "M2 20V3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17c0 .173-.022.34-.063.5H20a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.2-.4l-.5-.375a.75.75 0 0 1 .9-1.2l.5.375c.504.378.8.97.8 1.6v8a2 2 0 0 1-2 2h-3.562a.767.767 0 0 1-.166-.018c-.089.012-.18.018-.272.018h-3.75a.75.75 0 0 1-.75-.75V19h-3v2.25a.75.75 0 0 1-.75.75H4a2 2 0 0 1-2-2Zm2 .5h3v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25h3a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H4a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5Z" } }] })(props);
}

// app/components/NewWashModal/Stepper/Stepper.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime = __toESM(require_jsx_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NewWashModal/Stepper/Stepper.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWashModal/Stepper/Stepper.tsx"
  );
  import.meta.hot.lastModified = "1691704591000";
}
function Stepper2({
  steps: steps2,
  activeStep
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stepper, {
    index: activeStep,
    orientation: "vertical",
    blockSize: "100%",
    size: "lg",
    children: steps2.map(({
      IconIncomplete,
      IconActive,
      label
    }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Step, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIndicator, {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepStatus, {
          complete: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepIcon, {}),
          incomplete: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconIncomplete, {
            size: 20
          }),
          active: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconActive, {
            size: 20
          })
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        flexShrink: "0",
        paddingBlockStart: 1,
        display: ["none", "none", "none", "block"],
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepTitle, {
          children: label
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepSeparator, {})]
    }, index))
  });
}
_c = Stepper2;
var _c;
$RefreshReg$(_c, "Stepper");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWashModal/Stepper/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWashModal/Stepper/index.ts"
  );
  import.meta.hot.lastModified = "1691628455000";
}
var steps = [
  {
    label: "vehicle",
    IconIncomplete: MdDirectionsCarFilled,
    IconActive: MdDirectionsCarFilled,
    isNullable: false,
    modalTitle: "Escolher ve\xEDculo"
  },
  {
    label: "washes",
    IconIncomplete: MdWaterDrop,
    IconActive: MdWaterDrop,
    isNullable: false,
    modalTitle: "Cadastrar lavagens"
  },
  {
    label: "driver",
    IconIncomplete: MdPerson2,
    IconActive: MdPerson2,
    isNullable: true,
    modalTitle: "Escolher motorista"
  },
  {
    label: "organization",
    IconIncomplete: GoOrganization,
    IconActive: GoOrganization,
    isNullable: true,
    modalTitle: "Escolher organiza\xE7\xE3o"
  },
  {
    label: "summary",
    IconIncomplete: MdCheck,
    IconActive: MdCheck,
    isNullable: false,
    modalTitle: "Confirmar op\xE7\xF5es"
  }
];
function useStepper() {
  const { activeStep, goToNext, goToPrevious, setActiveStep } = useSteps({
    index: 1,
    count: steps.length
  });
  return {
    Stepper: Stepper2,
    activeStep,
    goToNext,
    goToPrevious,
    steps,
    setActiveStep
  };
}

// app/components/NewWashModal/VehicleContent/index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime2 = __toESM(require_jsx_runtime());

// node_modules/react-hook-form/dist/index.esm.mjs
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react3 = __toESM(require_react(), 1);
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
var isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
var isPlainObject = (tempObject) => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
  let copy;
  const isArray = Array.isArray(data);
  if (data instanceof Date) {
    copy = new Date(data);
  } else if (data instanceof Set) {
    copy = new Set(data);
  } else if (!(isWeb && (data instanceof Blob || data instanceof FileList)) && (isArray || isObject(data))) {
    copy = isArray ? [] : {};
    if (!isArray && !isPlainObject(data)) {
      copy = data;
    } else {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          copy[key] = cloneObject(data[key]);
        }
      }
    }
  } else {
    return data;
  }
  return copy;
}
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var isUndefined = (val) => val === void 0;
var get = (obj, path, defaultValue) => {
  if (!path || !isObject(obj)) {
    return defaultValue;
  }
  const result = compact(path.split(/[,[\].]+?/)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], obj);
  return isUndefined(result) || result === obj ? isUndefined(obj[path]) ? defaultValue : obj[path] : result;
};
var EVENTS = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
};
var VALIDATION_MODE = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
};
var INPUT_VALIDATION_RULES = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
var HookFormContext = import_react3.default.createContext(null);
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
  const result = {
    defaultValues: control._defaultValues
  };
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        localProxyFormState && (localProxyFormState[_key] = true);
        return formState[_key];
      }
    });
  }
  return result;
};
var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
  updateFormState(formStateData);
  const { name, ...formState } = formStateData;
  return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
function useSubscribe(props) {
  const _props = import_react3.default.useRef(props);
  _props.current = props;
  import_react3.default.useEffect(() => {
    const subscription = !props.disabled && _props.current.subject && _props.current.subject.subscribe({
      next: _props.current.next
    });
    return () => {
      subscription && subscription.unsubscribe();
    };
  }, [props.disabled]);
}
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    isGlobal && _names.watch.add(names);
    return get(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
  }
  isGlobal && (_names.watchAll = true);
  return formValues;
};
var isKey = (value) => /^\w*$/.test(value);
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
function set(object, path, value) {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = object[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }
    object[key] = newValue;
    object = object[key];
  }
  return object;
}
var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
  ...errors[name],
  types: {
    ...errors[name] && errors[name].types ? errors[name].types : {},
    [type]: message || true
  }
} : {};
var focusFieldBy = (fields, callback, fieldsNames) => {
  for (const key of fieldsNames || Object.keys(fields)) {
    const field = get(fields, key);
    if (field) {
      const { _f, ...currentField } = field;
      if (_f && callback(_f.name)) {
        if (_f.ref.focus) {
          _f.ref.focus();
          break;
        } else if (_f.refs && _f.refs[0].focus) {
          _f.refs[0].focus();
          break;
        }
      } else if (isObject(currentField)) {
        focusFieldBy(currentField, callback);
      }
    }
  }
};
var getValidationModes = (mode) => ({
  isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
  isOnBlur: mode === VALIDATION_MODE.onBlur,
  isOnChange: mode === VALIDATION_MODE.onChange,
  isOnAll: mode === VALIDATION_MODE.all,
  isOnTouch: mode === VALIDATION_MODE.onTouched
});
var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
var updateFieldArrayRootError = (errors, error, name) => {
  const fieldArrayErrors = compact(get(errors, name));
  set(fieldArrayErrors, "root", error[name]);
  set(errors, name, fieldArrayErrors);
  return errors;
};
var isBoolean = (value) => typeof value === "boolean";
var isFileInput = (element) => element.type === "file";
var isFunction = (value) => typeof value === "function";
var isHTMLElement = (value) => {
  if (!isWeb) {
    return false;
  }
  const owner = value ? value.ownerDocument : 0;
  return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMessage = (value) => isString(value);
var isRadioInput = (element) => element.type === "radio";
var isRegex = (value) => value instanceof RegExp;
var defaultResult = {
  value: false,
  isValid: false
};
var validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
  if (Array.isArray(options)) {
    if (options.length > 1) {
      const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
      return { value: values, isValid: !!values.length };
    }
    return options[0].checked && !options[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : { value: options[0].value, isValid: true } : validResult
    ) : defaultResult;
  }
  return defaultResult;
};
var defaultReturn = {
  isValid: false,
  value: null
};
var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous, option) => option && option.checked && !option.disabled ? {
  isValid: true,
  value: option.value
} : previous, defaultReturn) : defaultReturn;
function getValidateError(result, ref, type = "validate") {
  if (isMessage(result) || Array.isArray(result) && result.every(isMessage) || isBoolean(result) && !result) {
    return {
      type,
      message: isMessage(result) ? result : "",
      ref
    };
  }
}
var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
  value: validationData,
  message: ""
};
var validateField = async (field, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
  const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled } = field._f;
  const inputValue = get(formValues, name);
  if (!mount || disabled) {
    return {};
  }
  const inputRef = refs ? refs[0] : ref;
  const setCustomValidity = (message) => {
    if (shouldUseNativeValidation && inputRef.reportValidity) {
      inputRef.setCustomValidity(isBoolean(message) ? "" : message || "");
      inputRef.reportValidity();
    }
  };
  const error = {};
  const isRadio = isRadioInput(ref);
  const isCheckBox = isCheckBoxInput(ref);
  const isRadioOrCheckbox2 = isRadio || isCheckBox;
  const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
  const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
  const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
    const message = exceedMax ? maxLengthMessage : minLengthMessage;
    error[name] = {
      type: exceedMax ? maxType : minType,
      message,
      ref,
      ...appendErrorsCurry(exceedMax ? maxType : minType, message)
    };
  };
  if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox2 && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
    const { value, message } = isMessage(required) ? { value: !!required, message: required } : getValueAndMessage(required);
    if (value) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.required,
        message,
        ref: inputRef,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
    let exceedMax;
    let exceedMin;
    const maxOutput = getValueAndMessage(max);
    const minOutput = getValueAndMessage(min);
    if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
      const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
      if (!isNullOrUndefined(maxOutput.value)) {
        exceedMax = valueNumber > maxOutput.value;
      }
      if (!isNullOrUndefined(minOutput.value)) {
        exceedMin = valueNumber < minOutput.value;
      }
    } else {
      const valueDate = ref.valueAsDate || new Date(inputValue);
      const convertTimeToDate = (time) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + time);
      const isTime = ref.type == "time";
      const isWeek = ref.type == "week";
      if (isString(maxOutput.value) && inputValue) {
        exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
      }
      if (isString(minOutput.value) && inputValue) {
        exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
      }
    }
    if (exceedMax || exceedMin) {
      getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
    const maxLengthOutput = getValueAndMessage(maxLength);
    const minLengthOutput = getValueAndMessage(minLength);
    const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
    const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
    if (exceedMax || exceedMin) {
      getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if (pattern && !isEmpty && isString(inputValue)) {
    const { value: patternValue, message } = getValueAndMessage(pattern);
    if (isRegex(patternValue) && !inputValue.match(patternValue)) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.pattern,
        message,
        ref,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (validate) {
    if (isFunction(validate)) {
      const result = await validate(inputValue, formValues);
      const validateError = getValidateError(result, inputRef);
      if (validateError) {
        error[name] = {
          ...validateError,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(validateError.message);
          return error;
        }
      }
    } else if (isObject(validate)) {
      let validationResult = {};
      for (const key in validate) {
        if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
          break;
        }
        const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
        if (validateError) {
          validationResult = {
            ...validateError,
            ...appendErrorsCurry(key, validateError.message)
          };
          setCustomValidity(validateError.message);
          if (validateAllFieldCriteria) {
            error[name] = validationResult;
          }
        }
      }
      if (!isEmptyObject(validationResult)) {
        error[name] = {
          ref: inputRef,
          ...validationResult
        };
        if (!validateAllFieldCriteria) {
          return error;
        }
      }
    }
  }
  setCustomValidity(true);
  return error;
};
function baseGet(object, updatePath) {
  const length = updatePath.slice(0, -1).length;
  let index = 0;
  while (index < length) {
    object = isUndefined(object) ? index++ : object[updatePath[index++]];
  }
  return object;
}
function isEmptyArray(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
      return false;
    }
  }
  return true;
}
function unset(object, path) {
  const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
  const childObject = paths.length === 1 ? object : baseGet(object, paths);
  const index = paths.length - 1;
  const key = paths[index];
  if (childObject) {
    delete childObject[key];
  }
  if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
    unset(object, paths.slice(0, -1));
  }
  return object;
}
function createSubject() {
  let _observers = [];
  const next = (value) => {
    for (const observer of _observers) {
      observer.next && observer.next(value);
    }
  };
  const subscribe = (observer) => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter((o) => o !== observer);
      }
    };
  };
  const unsubscribe = () => {
    _observers = [];
  };
  return {
    get observers() {
      return _observers;
    },
    next,
    subscribe,
    unsubscribe
  };
}
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2) {
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return object1 === object2;
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return object1.getTime() === object2.getTime();
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    if (!keys2.includes(key)) {
      return false;
    }
    if (key !== "ref") {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2) : val1 !== val2) {
        return false;
      }
    }
  }
  return true;
}
var isMultipleSelect = (element) => element.type === `select-multiple`;
var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref) => isHTMLElement(ref) && ref.isConnected;
var objectHasFunction = (data) => {
  for (const key in data) {
    if (isFunction(data[key])) {
      return true;
    }
  }
  return false;
};
function markFieldsDirty(data, fields = {}) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        fields[key] = Array.isArray(data[key]) ? [] : {};
        markFieldsDirty(data[key], fields[key]);
      } else if (!isNullOrUndefined(data[key])) {
        fields[key] = true;
      }
    }
  }
  return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
          dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? markFieldsDirty(data[key], []) : { ...markFieldsDirty(data[key]) };
        } else {
          getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
        }
      } else {
        dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
      }
    }
  }
  return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));
var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
function getFieldValue(_f) {
  const ref = _f.ref;
  if (_f.refs ? _f.refs.every((ref2) => ref2.disabled) : ref.disabled) {
    return;
  }
  if (isFileInput(ref)) {
    return ref.files;
  }
  if (isRadioInput(ref)) {
    return getRadioValue(_f.refs).value;
  }
  if (isMultipleSelect(ref)) {
    return [...ref.selectedOptions].map(({ value }) => value);
  }
  if (isCheckBoxInput(ref)) {
    return getCheckboxValue(_f.refs).value;
  }
  return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
  const fields = {};
  for (const name of fieldsNames) {
    const field = get(_fields, name);
    field && set(fields, name, field._f);
  }
  return {
    criteriaMode,
    names: [...fieldsNames],
    fields,
    shouldUseNativeValidation
  };
};
var getRuleValue = (rule) => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
function schemaErrorLookup(errors, _fields, name) {
  const error = get(errors, name);
  if (error || isKey(name)) {
    return {
      error,
      name
    };
  }
  const names = name.split(".");
  while (names.length) {
    const fieldName = names.join(".");
    const field = get(_fields, fieldName);
    const foundError = get(errors, fieldName);
    if (field && !Array.isArray(field) && name !== fieldName) {
      return { name };
    }
    if (foundError && foundError.type) {
      return {
        name: fieldName,
        error: foundError
      };
    }
    names.pop();
  }
  return {
    name
  };
}
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
  if (mode.isOnAll) {
    return false;
  } else if (!isSubmitted && mode.isOnTouch) {
    return !(isTouched || isBlurEvent);
  } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
    return !isBlurEvent;
  } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
    return isBlurEvent;
  }
  return true;
};
var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
var defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};
function createFormControl(props = {}, flushRootRender) {
  let _options = {
    ...defaultOptions,
    ...props
  };
  let _formState = {
    submitCount: 0,
    isDirty: false,
    isLoading: isFunction(_options.defaultValues),
    isValidating: false,
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  };
  let _fields = {};
  let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
  let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
  let _state = {
    action: false,
    mount: false,
    watch: false
  };
  let _names = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  };
  let delayErrorCallback;
  let timer = 0;
  const _proxyFormState = {
    isDirty: false,
    dirtyFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  };
  const _subjects = {
    values: createSubject(),
    array: createSubject(),
    state: createSubject()
  };
  const shouldCaptureDirtyFields = props.resetOptions && props.resetOptions.keepDirtyValues;
  const validationModeBeforeSubmit = getValidationModes(_options.mode);
  const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
  const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
  const debounce = (callback) => (wait) => {
    clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
  const _updateValid = async (shouldUpdateValid) => {
    if (_proxyFormState.isValid || shouldUpdateValid) {
      const isValid = _options.resolver ? isEmptyObject((await _executeSchema()).errors) : await executeBuiltInValidation(_fields, true);
      if (isValid !== _formState.isValid) {
        _subjects.state.next({
          isValid
        });
      }
    }
  };
  const _updateIsValidating = (value) => _proxyFormState.isValidating && _subjects.state.next({
    isValidating: value
  });
  const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
    if (args && method) {
      _state.action = true;
      if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
        const fieldValues = method(get(_fields, name), args.argA, args.argB);
        shouldSetValues && set(_fields, name, fieldValues);
      }
      if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
        const errors = method(get(_formState.errors, name), args.argA, args.argB);
        shouldSetValues && set(_formState.errors, name, errors);
        unsetEmptyArray(_formState.errors, name);
      }
      if (_proxyFormState.touchedFields && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
        const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
        shouldSetValues && set(_formState.touchedFields, name, touchedFields);
      }
      if (_proxyFormState.dirtyFields) {
        _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
      }
      _subjects.state.next({
        name,
        isDirty: _getDirty(name, values),
        dirtyFields: _formState.dirtyFields,
        errors: _formState.errors,
        isValid: _formState.isValid
      });
    } else {
      set(_formValues, name, values);
    }
  };
  const updateErrors = (name, error) => {
    set(_formState.errors, name, error);
    _subjects.state.next({
      errors: _formState.errors
    });
  };
  const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
    const field = get(_fields, name);
    if (field) {
      const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
      isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
      _state.mount && _updateValid();
    }
  };
  const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
    let shouldUpdateField = false;
    let isPreviousDirty = false;
    const output = {
      name
    };
    if (!isBlurEvent || shouldDirty) {
      if (_proxyFormState.isDirty) {
        isPreviousDirty = _formState.isDirty;
        _formState.isDirty = output.isDirty = _getDirty();
        shouldUpdateField = isPreviousDirty !== output.isDirty;
      }
      const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
      isPreviousDirty = get(_formState.dirtyFields, name);
      isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
      output.dirtyFields = _formState.dirtyFields;
      shouldUpdateField = shouldUpdateField || _proxyFormState.dirtyFields && isPreviousDirty !== !isCurrentFieldPristine;
    }
    if (isBlurEvent) {
      const isPreviousFieldTouched = get(_formState.touchedFields, name);
      if (!isPreviousFieldTouched) {
        set(_formState.touchedFields, name, isBlurEvent);
        output.touchedFields = _formState.touchedFields;
        shouldUpdateField = shouldUpdateField || _proxyFormState.touchedFields && isPreviousFieldTouched !== isBlurEvent;
      }
    }
    shouldUpdateField && shouldRender && _subjects.state.next(output);
    return shouldUpdateField ? output : {};
  };
  const shouldRenderByError = (name, isValid, error, fieldState) => {
    const previousFieldError = get(_formState.errors, name);
    const shouldUpdateValid = _proxyFormState.isValid && isBoolean(isValid) && _formState.isValid !== isValid;
    if (props.delayError && error) {
      delayErrorCallback = debounce(() => updateErrors(name, error));
      delayErrorCallback(props.delayError);
    } else {
      clearTimeout(timer);
      delayErrorCallback = null;
      error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
    }
    if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
      const updatedFormState = {
        ...fieldState,
        ...shouldUpdateValid && isBoolean(isValid) ? { isValid } : {},
        errors: _formState.errors,
        name
      };
      _formState = {
        ..._formState,
        ...updatedFormState
      };
      _subjects.state.next(updatedFormState);
    }
    _updateIsValidating(false);
  };
  const _executeSchema = async (name) => _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
  const executeSchemaAndUpdateState = async (names) => {
    const { errors } = await _executeSchema();
    if (names) {
      for (const name of names) {
        const error = get(errors, name);
        error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
      }
    } else {
      _formState.errors = errors;
    }
    return errors;
  };
  const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
    valid: true
  }) => {
    for (const name in fields) {
      const field = fields[name];
      if (field) {
        const { _f, ...fieldValue } = field;
        if (_f) {
          const isFieldArrayRoot = _names.array.has(_f.name);
          const fieldError = await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
          if (fieldError[_f.name]) {
            context.valid = false;
            if (shouldOnlyCheckValid) {
              break;
            }
          }
          !shouldOnlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
        }
        fieldValue && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
      }
    }
    return context.valid;
  };
  const _removeUnmounted = () => {
    for (const name of _names.unMount) {
      const field = get(_fields, name);
      field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
    }
    _names.unMount = /* @__PURE__ */ new Set();
  };
  const _getDirty = (name, data) => (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
  const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
    ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue
  }, isGlobal, defaultValue);
  const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
  const setFieldValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    let fieldValue = value;
    if (field) {
      const fieldReference = field._f;
      if (fieldReference) {
        !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
        fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
        if (isMultipleSelect(fieldReference.ref)) {
          [...fieldReference.ref.options].forEach((optionRef) => optionRef.selected = fieldValue.includes(optionRef.value));
        } else if (fieldReference.refs) {
          if (isCheckBoxInput(fieldReference.ref)) {
            fieldReference.refs.length > 1 ? fieldReference.refs.forEach((checkboxRef) => (!checkboxRef.defaultChecked || !checkboxRef.disabled) && (checkboxRef.checked = Array.isArray(fieldValue) ? !!fieldValue.find((data) => data === checkboxRef.value) : fieldValue === checkboxRef.value)) : fieldReference.refs[0] && (fieldReference.refs[0].checked = !!fieldValue);
          } else {
            fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
          }
        } else if (isFileInput(fieldReference.ref)) {
          fieldReference.ref.value = "";
        } else {
          fieldReference.ref.value = fieldValue;
          if (!fieldReference.ref.type) {
            _subjects.values.next({
              name,
              values: { ..._formValues }
            });
          }
        }
      }
    }
    (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
    options.shouldValidate && trigger(name);
  };
  const setValues = (name, value, options) => {
    for (const fieldKey in value) {
      const fieldValue = value[fieldKey];
      const fieldName = `${name}.${fieldKey}`;
      const field = get(_fields, fieldName);
      (_names.array.has(name) || !isPrimitive(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
    }
  };
  const setValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    const isFieldArray = _names.array.has(name);
    const cloneValue = cloneObject(value);
    set(_formValues, name, cloneValue);
    if (isFieldArray) {
      _subjects.array.next({
        name,
        values: { ..._formValues }
      });
      if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) && options.shouldDirty) {
        _subjects.state.next({
          name,
          dirtyFields: getDirtyFields(_defaultValues, _formValues),
          isDirty: _getDirty(name, cloneValue)
        });
      }
    } else {
      field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
    }
    isWatched(name, _names) && _subjects.state.next({ ..._formState });
    _subjects.values.next({
      name,
      values: { ..._formValues }
    });
    !_state.mount && flushRootRender();
  };
  const onChange = async (event) => {
    const target = event.target;
    let name = target.name;
    let isFieldValueUpdated = true;
    const field = get(_fields, name);
    const getCurrentFieldValue = () => target.type ? getFieldValue(field._f) : getEventValue(event);
    if (field) {
      let error;
      let isValid;
      const fieldValue = getCurrentFieldValue();
      const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
      const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
      const watched = isWatched(name, _names, isBlurEvent);
      set(_formValues, name, fieldValue);
      if (isBlurEvent) {
        field._f.onBlur && field._f.onBlur(event);
        delayErrorCallback && delayErrorCallback(0);
      } else if (field._f.onChange) {
        field._f.onChange(event);
      }
      const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
      const shouldRender = !isEmptyObject(fieldState) || watched;
      !isBlurEvent && _subjects.values.next({
        name,
        type: event.type,
        values: { ..._formValues }
      });
      if (shouldSkipValidation) {
        _proxyFormState.isValid && _updateValid();
        return shouldRender && _subjects.state.next({ name, ...watched ? {} : fieldState });
      }
      !isBlurEvent && watched && _subjects.state.next({ ..._formState });
      _updateIsValidating(true);
      if (_options.resolver) {
        const { errors } = await _executeSchema([name]);
        const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
        const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
        error = errorLookupResult.error;
        name = errorLookupResult.name;
        isValid = isEmptyObject(errors);
      } else {
        error = (await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
        isFieldValueUpdated = isNaN(fieldValue) || fieldValue === get(_formValues, name, fieldValue);
        if (isFieldValueUpdated) {
          if (error) {
            isValid = false;
          } else if (_proxyFormState.isValid) {
            isValid = await executeBuiltInValidation(_fields, true);
          }
        }
      }
      if (isFieldValueUpdated) {
        field._f.deps && trigger(field._f.deps);
        shouldRenderByError(name, isValid, error, fieldState);
      }
    }
  };
  const trigger = async (name, options = {}) => {
    let isValid;
    let validationResult;
    const fieldNames = convertToArrayPayload(name);
    _updateIsValidating(true);
    if (_options.resolver) {
      const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
      isValid = isEmptyObject(errors);
      validationResult = name ? !fieldNames.some((name2) => get(errors, name2)) : isValid;
    } else if (name) {
      validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
        const field = get(_fields, fieldName);
        return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
      }))).every(Boolean);
      !(!validationResult && !_formState.isValid) && _updateValid();
    } else {
      validationResult = isValid = await executeBuiltInValidation(_fields);
    }
    _subjects.state.next({
      ...!isString(name) || _proxyFormState.isValid && isValid !== _formState.isValid ? {} : { name },
      ..._options.resolver || !name ? { isValid } : {},
      errors: _formState.errors,
      isValidating: false
    });
    options.shouldFocus && !validationResult && focusFieldBy(_fields, (key) => key && get(_formState.errors, key), name ? fieldNames : _names.mount);
    return validationResult;
  };
  const getValues = (fieldNames) => {
    const values = {
      ..._defaultValues,
      ..._state.mount ? _formValues : {}
    };
    return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name) => get(values, name));
  };
  const getFieldState = (name, formState) => ({
    invalid: !!get((formState || _formState).errors, name),
    isDirty: !!get((formState || _formState).dirtyFields, name),
    isTouched: !!get((formState || _formState).touchedFields, name),
    error: get((formState || _formState).errors, name)
  });
  const clearErrors = (name) => {
    name && convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName));
    _subjects.state.next({
      errors: name ? _formState.errors : {}
    });
  };
  const setError = (name, error, options) => {
    const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
    set(_formState.errors, name, {
      ...error,
      ref
    });
    _subjects.state.next({
      name,
      errors: _formState.errors,
      isValid: false
    });
    options && options.shouldFocus && ref && ref.focus && ref.focus();
  };
  const watch = (name, defaultValue) => isFunction(name) ? _subjects.values.subscribe({
    next: (payload) => name(_getWatch(void 0, defaultValue), payload)
  }) : _getWatch(name, defaultValue, true);
  const unregister = (name, options = {}) => {
    for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
      _names.mount.delete(fieldName);
      _names.array.delete(fieldName);
      if (!options.keepValue) {
        unset(_fields, fieldName);
        unset(_formValues, fieldName);
      }
      !options.keepError && unset(_formState.errors, fieldName);
      !options.keepDirty && unset(_formState.dirtyFields, fieldName);
      !options.keepTouched && unset(_formState.touchedFields, fieldName);
      !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
    }
    _subjects.values.next({
      values: { ..._formValues }
    });
    _subjects.state.next({
      ..._formState,
      ...!options.keepDirty ? {} : { isDirty: _getDirty() }
    });
    !options.keepIsValid && _updateValid();
  };
  const register = (name, options = {}) => {
    let field = get(_fields, name);
    const disabledIsDefined = isBoolean(options.disabled);
    set(_fields, name, {
      ...field || {},
      _f: {
        ...field && field._f ? field._f : { ref: { name } },
        name,
        mount: true,
        ...options
      }
    });
    _names.mount.add(name);
    if (!isUndefined(options.value)) {
      set(_formValues, name, options.value);
    }
    field ? disabledIsDefined && set(_formValues, name, options.disabled ? void 0 : get(_formValues, name, getFieldValue(field._f))) : updateValidAndValue(name, true, options.value);
    return {
      ...disabledIsDefined ? { disabled: options.disabled } : {},
      ..._options.progressive ? {
        required: !!options.required,
        min: getRuleValue(options.min),
        max: getRuleValue(options.max),
        minLength: getRuleValue(options.minLength),
        maxLength: getRuleValue(options.maxLength),
        pattern: getRuleValue(options.pattern)
      } : {},
      name,
      onChange,
      onBlur: onChange,
      ref: (ref) => {
        if (ref) {
          register(name, options);
          field = get(_fields, name);
          const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
          const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
          const refs = field._f.refs || [];
          if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) {
            return;
          }
          set(_fields, name, {
            _f: {
              ...field._f,
              ...radioOrCheckbox ? {
                refs: [
                  ...refs.filter(live),
                  fieldRef,
                  ...Array.isArray(get(_defaultValues, name)) ? [{}] : []
                ],
                ref: { type: fieldRef.type, name }
              } : { ref: fieldRef }
            }
          });
          updateValidAndValue(name, false, void 0, fieldRef);
        } else {
          field = get(_fields, name, {});
          if (field._f) {
            field._f.mount = false;
          }
          (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
        }
      }
    };
  };
  const _focusError = () => _options.shouldFocusError && focusFieldBy(_fields, (key) => key && get(_formState.errors, key), _names.mount);
  const handleSubmit = (onValid, onInvalid) => async (e) => {
    if (e) {
      e.preventDefault && e.preventDefault();
      e.persist && e.persist();
    }
    let fieldValues = cloneObject(_formValues);
    _subjects.state.next({
      isSubmitting: true
    });
    if (_options.resolver) {
      const { errors, values } = await _executeSchema();
      _formState.errors = errors;
      fieldValues = values;
    } else {
      await executeBuiltInValidation(_fields);
    }
    unset(_formState.errors, "root");
    if (isEmptyObject(_formState.errors)) {
      _subjects.state.next({
        errors: {}
      });
      await onValid(fieldValues, e);
    } else {
      if (onInvalid) {
        await onInvalid({ ..._formState.errors }, e);
      }
      _focusError();
      setTimeout(_focusError);
    }
    _subjects.state.next({
      isSubmitted: true,
      isSubmitting: false,
      isSubmitSuccessful: isEmptyObject(_formState.errors),
      submitCount: _formState.submitCount + 1,
      errors: _formState.errors
    });
  };
  const resetField = (name, options = {}) => {
    if (get(_fields, name)) {
      if (isUndefined(options.defaultValue)) {
        setValue(name, get(_defaultValues, name));
      } else {
        setValue(name, options.defaultValue);
        set(_defaultValues, name, options.defaultValue);
      }
      if (!options.keepTouched) {
        unset(_formState.touchedFields, name);
      }
      if (!options.keepDirty) {
        unset(_formState.dirtyFields, name);
        _formState.isDirty = options.defaultValue ? _getDirty(name, get(_defaultValues, name)) : _getDirty();
      }
      if (!options.keepError) {
        unset(_formState.errors, name);
        _proxyFormState.isValid && _updateValid();
      }
      _subjects.state.next({ ..._formState });
    }
  };
  const _reset = (formValues, keepStateOptions = {}) => {
    const updatedValues = formValues || _defaultValues;
    const cloneUpdatedValues = cloneObject(updatedValues);
    const values = formValues && !isEmptyObject(formValues) ? cloneUpdatedValues : _defaultValues;
    if (!keepStateOptions.keepDefaultValues) {
      _defaultValues = updatedValues;
    }
    if (!keepStateOptions.keepValues) {
      if (keepStateOptions.keepDirtyValues || shouldCaptureDirtyFields) {
        for (const fieldName of _names.mount) {
          get(_formState.dirtyFields, fieldName) ? set(values, fieldName, get(_formValues, fieldName)) : setValue(fieldName, get(values, fieldName));
        }
      } else {
        if (isWeb && isUndefined(formValues)) {
          for (const name of _names.mount) {
            const field = get(_fields, name);
            if (field && field._f) {
              const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
              if (isHTMLElement(fieldReference)) {
                const form = fieldReference.closest("form");
                if (form) {
                  form.reset();
                  break;
                }
              }
            }
          }
        }
        _fields = {};
      }
      _formValues = props.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
      _subjects.array.next({
        values: { ...values }
      });
      _subjects.values.next({
        values: { ...values }
      });
    }
    _names = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: false,
      focus: ""
    };
    !_state.mount && flushRootRender();
    _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
    _state.watch = !!props.shouldUnregister;
    _subjects.state.next({
      submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
      isDirty: keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
      isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
      dirtyFields: keepStateOptions.keepDirtyValues ? _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : {},
      touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
      errors: keepStateOptions.keepErrors ? _formState.errors : {},
      isSubmitting: false,
      isSubmitSuccessful: false
    });
  };
  const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
  const setFocus = (name, options = {}) => {
    const field = get(_fields, name);
    const fieldReference = field && field._f;
    if (fieldReference) {
      const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
      if (fieldRef.focus) {
        fieldRef.focus();
        options.shouldSelect && fieldRef.select();
      }
    }
  };
  const _updateFormState = (updatedFormState) => {
    _formState = {
      ..._formState,
      ...updatedFormState
    };
  };
  const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then((values) => {
    reset(values, _options.resetOptions);
    _subjects.state.next({
      isLoading: false
    });
  });
  return {
    control: {
      register,
      unregister,
      getFieldState,
      handleSubmit,
      setError,
      _executeSchema,
      _getWatch,
      _getDirty,
      _updateValid,
      _removeUnmounted,
      _updateFieldArray,
      _getFieldArray,
      _reset,
      _resetDefaultValues,
      _updateFormState,
      _subjects,
      _proxyFormState,
      get _fields() {
        return _fields;
      },
      get _formValues() {
        return _formValues;
      },
      get _state() {
        return _state;
      },
      set _state(value) {
        _state = value;
      },
      get _defaultValues() {
        return _defaultValues;
      },
      get _names() {
        return _names;
      },
      set _names(value) {
        _names = value;
      },
      get _formState() {
        return _formState;
      },
      set _formState(value) {
        _formState = value;
      },
      get _options() {
        return _options;
      },
      set _options(value) {
        _options = {
          ..._options,
          ...value
        };
      }
    },
    trigger,
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    resetField,
    clearErrors,
    unregister,
    setError,
    setFocus,
    getFieldState
  };
}
function useForm(props = {}) {
  const _formControl = import_react3.default.useRef();
  const _values = import_react3.default.useRef();
  const [formState, updateFormState] = import_react3.default.useState({
    isDirty: false,
    isValidating: false,
    isLoading: isFunction(props.defaultValues),
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: isFunction(props.defaultValues) ? void 0 : props.defaultValues
  });
  if (!_formControl.current) {
    _formControl.current = {
      ...createFormControl(props, () => updateFormState((formState2) => ({ ...formState2 }))),
      formState
    };
  }
  const control = _formControl.current.control;
  control._options = props;
  useSubscribe({
    subject: control._subjects.state,
    next: (value) => {
      if (shouldRenderFormState(value, control._proxyFormState, control._updateFormState, true)) {
        updateFormState({ ...control._formState });
      }
    }
  });
  import_react3.default.useEffect(() => {
    if (props.values && !deepEqual(props.values, _values.current)) {
      control._reset(props.values, control._options.resetOptions);
      _values.current = props.values;
    } else {
      control._resetDefaultValues();
    }
  }, [props.values, control]);
  import_react3.default.useEffect(() => {
    if (!control._state.mount) {
      control._updateValid();
      control._state.mount = true;
    }
    if (control._state.watch) {
      control._state.watch = false;
      control._subjects.state.next({ ...control._formState });
    }
    control._removeUnmounted();
  });
  _formControl.current.formState = getProxyFormState(formState, control);
  return _formControl.current;
}

// app/components/SearchEntity/index.ts
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
init_dist();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/SearchEntity/index.ts"
  );
  import.meta.hot.lastModified = "1691618911000";
}
function useSearchEntity() {
  const fetcher = useFetcher();
  return {
    fetcher
  };
}

// app/components/NewWashModal/VehicleContent/index.tsx
var import_react5 = __toESM(require_react());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NewWashModal/VehicleContent/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWashModal/VehicleContent/index.tsx"
  );
  import.meta.hot.lastModified = "1692135431511.719";
}
var selectOptions = ["Extra leve", "Leve", "Vuc", "Toco", "Truck", "Bitruck", "Carreta"];
function VehicleContent() {
  var _a, _b, _c6;
  _s();
  const [searchParams, setSearchParams] = useSearchParams();
  const vehicle = JSON.parse((_a = searchParams.get("vehicle")) != null ? _a : "[]");
  const {
    fetcher
  } = useSearchEntity();
  const timeoutId = (0, import_react5.useRef)(null);
  const {
    watch,
    setValue,
    formState: {
      errors
    }
  } = useForm({
    defaultValues: {
      create: vehicle == null ? void 0 : vehicle.create,
      licensePlate: vehicle == null ? void 0 : vehicle.licensePlate,
      type: vehicle == null ? void 0 : vehicle.type,
      queried: {
        licensePlate: void 0,
        type: void 0
      }
    }
  });
  const createVehicleFetcher = useFetcher2();
  const data = fetcher.data;
  const isCreateVehicleTrue = watch("create");
  const newVehicle = {
    licensePlate: watch("licensePlate"),
    type: watch("type")
  };
  const queried = watch("queried");
  function deleteVehicleParam() {
    setSearchParams((p) => {
      p.delete("vehicle");
      return p;
    });
  }
  function setVehicleParams(params) {
    setSearchParams((p) => {
      const vehicle2 = p.get("vehicle");
      if (!vehicle2) {
        p.set("vehicle", JSON.stringify(params));
      } else {
        const obj = JSON.parse(vehicle2);
        p.set("vehicle", JSON.stringify({
          ...obj,
          ...params
        }));
      }
      return p;
    });
  }
  function onNewVehicleFormChange(e) {
    var _a2, _b2, _c7, _d, _e;
    const form = new FormData(e.target.form);
    const create = ((_a2 = form.get("create")) == null ? void 0 : _a2.toString()) === "";
    const licensePlate = (_c7 = (_b2 = form.get("licensePlate")) == null ? void 0 : _b2.toString()) != null ? _c7 : newVehicle == null ? void 0 : newVehicle.licensePlate;
    const type = (_e = (_d = form.get("type")) == null ? void 0 : _d.toString()) != null ? _e : newVehicle == null ? void 0 : newVehicle.type;
    setValue("licensePlate", licensePlate);
    setValue("type", type);
    setValue("create", create);
    if (create && licensePlate && type) {
      setVehicleParams({
        licensePlate,
        type,
        create
      });
      return;
    }
    if (create && (!licensePlate || !type)) {
      deleteVehicleParam();
      return;
    }
    if (!create && queried.licensePlate && queried.type) {
      setVehicleParams({
        licensePlate: queried.licensePlate,
        type: queried.type
      });
      return;
    }
  }
  function onQueryFormChange(e) {
    var _a2, _b2;
    const form = new FormData(e.target.form);
    const query = (_b2 = (_a2 = form.get("query")) == null ? void 0 : _a2.toString()) != null ? _b2 : "";
    timeoutId.current && clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      fetcher.submit({
        query
      }, {
        action: "/vehicle-search",
        method: "get"
      });
      setValue("queried", {
        licensePlate: null,
        type: null
      });
      deleteVehicleParam();
    }, 1e3);
  }
  function onInputClick(v) {
    setValue("queried.licensePlate", v.licensePlate);
    setValue("queried.type", v.type);
    setValue("create", false);
    setSearchParams((p) => {
      const vehicle2 = p.get("vehicle");
      if (!vehicle2) {
        p.append("vehicle", JSON.stringify(v));
      } else {
        const obj = JSON.parse(vehicle2);
        p.set("vehicle", JSON.stringify({
          ...obj,
          ...v
        }));
      }
      return p;
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Grid, {
      gridAutoRows: "min-content",
      paddingBlockEnd: [8],
      gap: 4,
      gridAutoFlow: ["row", "row", "column"],
      placeItems: ["center", "center", "start"],
      placeContent: ["center", "center", "space-between"],
      children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Flex, {
        flexDir: ["column"],
        position: "relative",
        _after: typeof data !== "undefined" && (data == null ? void 0 : data.length) > 0 ? {
          content: "''",
          display: "block",
          position: "absolute",
          insetInline: 0,
          bottom: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)",
          blockSize: 4
        } : {},
        gap: 4,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(fetcher.Form, {
          onChange: onQueryFormChange,
          children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormControl, {
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, {
              name: "query",
              placeholder: "procurar entidade",
              _placeholder: {
                textAlign: "center"
              },
              maxInlineSize: "280px",
              marginInline: "auto",
              isDisabled: isCreateVehicleTrue,
              rounded: "full"
            })
          }), !isCreateVehicleTrue && data && (data == null ? void 0 : data.length) >= 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, {
            children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Text, {
              inlineSize: "fit-content",
              marginInline: "auto",
              marginBlock: 4,
              fontSize: "sm",
              color: "gray.400",
              children: (data == null ? void 0 : data.length) === 0 ? "nenhum resultado encontrado :(" : `mostrando ${data == null ? void 0 : data.length} resultados`
            }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Grid, {
              gap: 4,
              maxBlockSize: "240px",
              overflow: "scroll",
              children: data == null ? void 0 : data.map((v, i) => {
                return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Flex, {
                  inlineSize: "100%",
                  flexDir: "column",
                  gap: 6,
                  children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(FormControl, {
                    as: Flex,
                    flexDir: "column",
                    alignItems: "center",
                    children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormLabel, {
                      children: "Placa"
                    }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, {
                      maxInlineSize: "200px",
                      marginBlockEnd: data.length - 1 === i ? 4 : 0,
                      type: "button",
                      defaultValue: v.licensePlate,
                      borderColor: (queried == null ? void 0 : queried.licensePlate) === v.licensePlate ? "blue.400" : "gray.200",
                      _hover: {
                        borderColor: (queried == null ? void 0 : queried.licensePlate) === v.licensePlate ? "blue.400" : "gray.300"
                      },
                      focusBorderColor: (queried == null ? void 0 : queried.licensePlate) === v.licensePlate ? "blue.400" : "gray.300",
                      onClick: () => onInputClick(v)
                    })]
                  }), data.length - 1 !== i && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Divider, {
                    alignSelf: "center",
                    inlineSize: "80%"
                  })]
                }, `${v.licensePlate} + ${i}`);
              })
            })]
          })]
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Box, {
        position: "relative",
        padding: 4,
        inlineSize: "60%",
        children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Divider, {}), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AbsoluteCenter, {
          bg: "white",
          px: "4",
          children: "ou"
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Grid, {
        gridAutoRows: "min-content",
        placeContent: "center",
        gap: 4,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(createVehicleFetcher.Form, {
          onChange: onNewVehicleFormChange,
          children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(FormControl, {
            as: Flex,
            blockSize: "min-content",
            gap: 4,
            paddingBlockStart: [0, 0, 1],
            align: "center",
            children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormLabel, {
              margin: 0,
              htmlFor: "vehicle_create",
              children: "Adicionar novo ve\xEDculo?"
            }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Checkbox, {
              id: "vehicle_create",
              name: "create",
              size: "lg",
              justifySelf: "center",
              defaultChecked: isCreateVehicleTrue
            })]
          }), /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Flex, {
            flexDir: "column",
            gap: 6,
            children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormControl, {
              as: Grid,
              gridTemplateRows: "min-content",
              gridAutoFlow: ["row", "row", "column"],
              placeItems: "center",
              marginBlockStart: 8,
              gap: 4,
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Flex, {
                flexDir: "column",
                gap: 4,
                children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormLabel, {
                  margin: 0,
                  htmlFor: "vehicle_licensePlate",
                  children: "Ve\xEDculo"
                }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, {
                  id: "vehicle_licensePlate",
                  name: "licensePlate",
                  placeholder: "Placa",
                  defaultValue: (_b = newVehicle == null ? void 0 : newVehicle.licensePlate) != null ? _b : "",
                  isDisabled: !isCreateVehicleTrue
                }), (errors == null ? void 0 : errors.licensePlate) && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Alert, {
                  status: "error",
                  marginBlock: 4,
                  children: [/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AlertIcon, {}), errors.licensePlate.message]
                })]
              })
            }), /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormControl, {
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Select, {
                defaultValue: (_c6 = newVehicle == null ? void 0 : newVehicle.type) != null ? _c6 : void 0,
                id: "type",
                name: "type",
                placeholder: "Tipo do ve\xEDculo",
                isDisabled: !isCreateVehicleTrue,
                children: selectOptions.map((o) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", {
                  value: o == null ? void 0 : o.toString(),
                  children: o
                }, o))
              })
            })]
          })]
        })
      })]
    })
  });
}
_s(VehicleContent, "uF/OucOgzXXX1MTAVyH+v6cwmtw=", false, function() {
  return [useSearchParams, useSearchEntity, useForm, useFetcher2];
});
_c2 = VehicleContent;
var _c2;
$RefreshReg$(_c2, "VehicleContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NewWashModal/WashesContent/index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
init_dist();

// node_modules/react-icons/fa/index.esm.js
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
function FaExternalLinkAlt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" } }] })(props);
}

// app/components/NewWashModal/WashesContent/index.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NewWashModal/WashesContent/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NewWashModal/WashesContent/index.tsx"
  );
  import.meta.hot.lastModified = "1692154262886.5989";
}
function BoxTitle({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, {
    color: "gray.500",
    fontSize: "md",
    fontWeight: "bold",
    children
  });
}
_c3 = BoxTitle;
function BoxContent({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Box, {
    blockSize: "100%",
    children
  });
}
_c22 = BoxContent;
function BoxIcon({
  icon
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Flex, {
    blockSize: "100%",
    justify: "center",
    align: "center",
    children: icon
  });
}
_c32 = BoxIcon;
function BoxContainer({
  to,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Grid, {
    minInlineSize: "180px",
    paddingBlock: 4,
    gridTemplateColumns: "80% 20%",
    gridTemplateRows: "1fr",
    as: Link,
    to,
    children
  });
}
_c4 = BoxContainer;
function WashesContent({
  washes,
  washCycle
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Grid, {
    blockSize: "100%",
    gridTemplateRows: "1fr auto",
    children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Box, {
      children: washCycle && washes && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Alert, {
        status: "info",
        children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(AlertIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Text, {
          children: ["H\xE1 lavagens ativas para o ve\xEDculo com placa", " ", /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LinkHighlighted, {
            to: `/vehicle/${washCycle.vehicleId}`,
            children: washCycle.vehicleId
          })]
        })]
      })
    }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Box, {
      children: washes.map((w) => {
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(BoxContainer, {
          to: `/wash/${w.id}`,
          children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(BoxContent, {
            children: [/* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BoxTitle, {
              children: w.scheduleDate
            }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, {
              children: w.note
            })]
          }), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BoxIcon, {
            icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FaExternalLinkAlt, {
              size: 16
            })
          })]
        }, w.id);
      })
    })]
  });
}
_c5 = WashesContent;
var _c3;
var _c22;
var _c32;
var _c4;
var _c5;
$RefreshReg$(_c3, "BoxTitle");
$RefreshReg$(_c22, "BoxContent");
$RefreshReg$(_c32, "BoxIcon");
$RefreshReg$(_c4, "BoxContainer");
$RefreshReg$(_c5, "WashesContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  useStepper,
  VehicleContent,
  WashesContent
};
//# sourceMappingURL=http://localhost:3001/build/_shared/chunk-ZMLXUN7N.js.map
