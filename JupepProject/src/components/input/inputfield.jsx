import { useState } from "react";
// import { COLORS } from '../../assets/color/index';
// import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import PropTypes from "prop-types";
import "./inputfield.css";

const InputField = ({
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
  const [hidePassword, setHidePassword] = useState(false);
  return (
    <div className="input_container">
      <div className="input_label">
        <label>{label}</label>
      </div>
      <div className="inputField_container">
        <input
          type={password ? (hidePassword ? "text" : "password") : type}
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
          className="input_field"
          // {...register(name)}
          {...props}
        />
        {/* {password && (
          <div
            className='password_Icon'
            onClick={() => {
              setHidePassword(!hidePassword);
            }}>
            {hidePassword ? (
              <MdOutlineVisibility size={24} style={{ color: COLORS.primary }} />
            ) : (
              <MdOutlineVisibilityOff
                size={24}
                style={{ color: COLORS.menuIcon }}
              />
            )}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default InputField;

InputField.prototype = {
  // name: PropTypes.string,
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
