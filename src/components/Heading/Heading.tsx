import styles from "./Styles.module.css";

export type HeadingTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSizeType = "4xl" | "3xl" | "2xl" | "xl" | "lg" | "base" | "sm" | "xs";

export interface HeadingProps {
  tag?: HeadingTagType;
  size?: HeadingSizeType;
  label: string;
}

export const Heading = (props: HeadingProps) => {
  const Tag = props.tag !== undefined ? props.tag : "h1";
  const size = props.size !== undefined ? props.size : "4xl";
  const classes = [styles.heading, styles[`heading--size-${size}`]].join(" ");

  return <Tag className={classes}>{props.label}</Tag>;
};
