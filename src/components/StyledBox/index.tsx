
import { SBox } from "./styles";

interface StyledBoxProps {
  children: React.ReactNode;
}
export function StyledBox({ children, ...rest }: StyledBoxProps) {
  return (
    <SBox {...rest}>
      {children}
    </SBox>
  )
}