import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import styled from '@emotion/styled';
import { addTimeTemp, setWeight } from '../../../redux/slices/sessionSlice';
import { getDefaultStartTime, isNumeric } from '../../../utils';
import TimeSelect from '../TimeSelect';
import testId from './testid';

const InitEntryContentContainer = styled.div`
  position: absolute;
  width: 400px;
  background-color: #ffffff;
  top: 40%;
  left: 40%;
  transform: translate(-40%, -40%);
  outline: 0;
  padding: 16px;
  border-radius: 4px;
`;

const LaunchModalHeader = styled.div`
  font-size: 24px;
  padding-bottom: 8px;
`;

const LaunchModalInput = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
`;

export type Inputs = {
  time: string;
  temp: string;
  weight: string;
};

export type OnChangeEventType = {
  target: {
    value: string;
  };
};

export type OnTimeInputChangeType = {
  value: string;
  name?: string | undefined;
};

export type Props = {
  onSubmit: () => void;
};

const InitEntryForm: React.FC<Props> = ({ onSubmit }) => {
  const defaultStartTime = getDefaultStartTime();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      time: defaultStartTime,
      temp: '',
      weight: '',
    },
  });

  const dispatch = useDispatch();

  const onStartSubmit: SubmitHandler<Inputs> = (data) => {
    const { temp, weight, time } = data;

    // TODO: these are error conditions, but need to add helper text and error state
    if (!temp || !isNumeric(temp)) return;
    if (!weight || !isNumeric(weight) || Number(weight) < 0) return;

    const newTimeTemp = {
      temp: Number(temp),
      time,
      addedCoals: true,
    };

    dispatch(addTimeTemp(newTimeTemp));
    dispatch(setWeight(Number(weight)));

    onSubmit();
  };

  const tempErrorMessage = `Please enter a valid temperature`;
  const weightErrorMessage = `Please enter a valid weight`;

  return (
    <InitEntryContentContainer data-testid={testId('root')}>
      <LaunchModalHeader>
        <h1>Welcome to Buddy Cue!</h1>
        <div>Please select a starting time, temp (in ºF), and weight (in lbs).</div>
      </LaunchModalHeader>
      <LaunchModalInput>
        <form onSubmit={handleSubmit(onStartSubmit)} data-testid={testId('form')}>
          <div style={{ padding: '8px' }}>
            <TimeSelect name="time" control={control} />
          </div>
          <div style={{ padding: '8px' }}>
            <Controller
              name="temp"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  slotProps={{htmlInput: {"data-testid": testId('input-temp')}}}
                  id="input-temp"
                  label="Temperature"
                  variant="outlined"
                  error={!!errors.temp}
                  helperText={errors.temp && tempErrorMessage}
                />
              )}
            />
          </div>
          <div style={{ padding: '8px' }}>
            <Controller
              name="weight"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  slotProps={{htmlInput: {"data-testid": testId('input-weight')}}}
                  id="input-weight"
                  label="Weight"
                  variant="outlined"
                  error={!!errors.weight}
                  helperText={errors.weight && weightErrorMessage}
                />
              )}
            />
          </div>
          <div style={{ padding: '8px' }}>
            <Button
              data-testid={testId('button-submit')}
              color="primary"
              type="submit"
              variant="contained"
            >
              START SMOKING
            </Button>
          </div>
        </form>
      </LaunchModalInput>
    </InitEntryContentContainer>
  );
};

export default InitEntryForm;
