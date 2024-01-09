import PropTypes from "prop-types";
import "./textarea.css";

const TextArea = ({
  name,
  placeholder,
  type,
  error,
  onChange,
  password,
  required,
  style,
  value,
  onBlur,
  min,
  label,
  ariaInvalid,
  ariaDescribedby,
  Inputref,

  onFocus,
  readOnly,
  toolTipId,
  toolTip,
  ...props
}) => {
  // const {register} = useFormContext()
  //   const [hidePassword, setHidePassword] = useState(false);
  return (
    <div className="text_container">
      <div className="text_label">
        <label>{label}</label>
      </div>
      <div className="textField_container">
        <textarea
          //   type={password ? (hidePassword ? 'text' : 'password') : type}
          name={name}
          placeholder={placeholder}
          required={required}
          onError={error}
          style={style}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          min={min}
          aria-invalid={ariaInvalid}
          autoComplete="off"
          aria-describedby={ariaDescribedby}
          ref={Inputref}
          onFocus={onFocus}
          readOnly={readOnly}
          className="text_field"
          // {...register(name)}
          {...props}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;

TextArea.prototype = {
  name: PropTypes.string,
  onChange: PropTypes.any,
  label: PropTypes.string,
  password: PropTypes.boolean,
  value: PropTypes.string,
  error: PropTypes.any,
  onBlur: PropTypes.any,
  onFocus: PropTypes.any,
  required: PropTypes.boolean,
  readOnly: PropTypes.boolean,
  placeholder: PropTypes.string,
  type: PropTypes.any,
  style: PropTypes.any,
  min: PropTypes.number,
  ariaInvalid:
    PropTypes.boolean | "false" | "true" | "grammar" | "spelling" | undefined,
  ariaDescribedby: PropTypes.string | undefined,
  Inputref: PropTypes.any,
};
