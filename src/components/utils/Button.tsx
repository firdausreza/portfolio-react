import React from "react";

interface ButtonProps {
  text: string;
  withIcons: boolean;
  customClass: string;
  iconClass?: string;
  reversedIcon?: boolean;
  isLink: boolean;
  link?: string;
  newTab?: boolean;
}

function Button(props: ButtonProps) {
  if (props.isLink) {
    if (props.withIcons) {
      if (!props.reversedIcon) {
        return (
          <a
            className={props.customClass}
            href={props.link}
            target={props.newTab ? "_blank" : "_self"}
            role="button"
            rel="noreferrer"
            data-aos="fade-up"
          >
            <span className="me-1">
              <i className={props.iconClass}></i>
            </span>
            {props.text}
          </a>
        );
      } else {
        return (
          <a
            className={props.customClass}
            href={props.link}
            target={props.newTab ? "_blank" : "_self"}
            role="button"
            rel="noreferrer"
            data-aos="fade-up"
          >
            {props.text}
            <span className="ms-1">
              <i className={props.iconClass}></i>
            </span>
          </a>
        );
      }
    } else {
      return (
        <a
          className={props.customClass}
          href={props.link}
          target={props.newTab ? "_blank" : "_self"}
          role="button"
          rel="noreferrer"
          data-aos="fade-up"
        >
          {props.text}
        </a>
      );
    }
  } else {
    if (props.withIcons) {
      if (props.reversedIcon) {
        return (
          <button data-aos="fade-up" className={props.customClass} type="button">
            <span className="me-1">
              <i className={props.iconClass}></i>
            </span>
            {props.text}
          </button>
        );
      } else {
        return (
          <button data-aos="fade-up" className={props.customClass} type="button">
            {props.text}
            <span className="ms-1">
              <i className={props.iconClass}></i>
            </span>
          </button>
        );
      }
    } else {
      return (
        <button data-aos="fade-up" className={props.customClass} type="button">
          {props.text}
        </button>
      );
    }
  }
}

export default Button;
