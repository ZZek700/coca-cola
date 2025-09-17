interface LogoProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' > {}

export default function Logo(props: LogoProps) {
  return (
      <img src="/CROWN_WHITE_LOGO.png" alt="Crown Wellness Club Logo" {...props} />
  );
}
