interface LogoProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' > {
  variant?: 'white' | 'black';
}

export default function Logo({variant = "white", ...props }: LogoProps) {
  return (
      <img src={`/CROWN_${variant !== "white" ? 'BLACK' : 'WHITE'}_LOGO.png`} alt="Crown Wellness Club Logo" {...props} />
  );
}
