import React, { forwardRef, ChangeEvent } from 'react';
import TextareaAutoSize from 'react-textarea-autosize';
import { StyledTextarea } from './styles';

const Textarea = forwardRef<any, any>(({ className, onChange = () => {}, ...textareaProps }, ref) => (
  <StyledTextarea className={className}>
    <TextareaAutoSize
      {...textareaProps}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value, event)}
      ref={ref || undefined}
    />
  </StyledTextarea>
));

export default Textarea;
