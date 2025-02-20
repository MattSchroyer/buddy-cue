import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import styled from '@emotion/styled';
import { addTimeTemp, setWeight } from '../../../redux/slices/sessionSlice';
import { getTimeIntervals, isNumeric } from '../../../utils';
import TimeSelect from '../TimeSelect';

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
  const startTimes = getTimeIntervals();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      time: startTimes[0],
      temp: '',
      weight: '',
    },
  });

  const dispatch = useDispatch();

  const onStartSubmit: SubmitHandler<Inputs> = (data) => {
    const { temp, weight, time } = data;

    if (!temp || !isNumeric(temp)) return;
    if (!weight || !isNumeric(weight) || Number(weight) < 0) return;

    // TODO: Have the time values in the select already as ISO strings
    const newTimeTemp = {
      temp: Number(temp),
      time: new Date(time).toISOString(),
      addedCoals: true,
    };

    dispatch(addTimeTemp(newTimeTemp));
    dispatch(setWeight(Number(weight)));

    onSubmit();
  };

  const tempErrorMessage = `Please enter a valid temperature`;
  const weightErrorMessage = `Please enter a valid weight`;

  return (
    <InitEntryContentContainer>
      <LaunchModalHeader>
        <h1>Welcome to Buddy Cue!</h1>
        <div>Please select a starting time, temp (in ºF), and weight (in lbs).</div>
      </LaunchModalHeader>
      <LaunchModalInput>
        <form onSubmit={handleSubmit(onStartSubmit)}>
          <div style={{ padding: '8px' }}>
            <TimeSelect
              name='time'
              control={control}
            />
          </div>
          <div style={{ padding: '8px' }}>
            <Controller
              name="temp"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="temp-input"
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
                  id="weight-input"
                  label="Weight"
                  variant="outlined"
                  error={!!errors.weight}
                  helperText={errors.weight && weightErrorMessage}
                />
              )}
            />
          </div>
          <div style={{ padding: '8px' }}>
            <Button color="primary" type="submit" variant="contained">
              START SMOKING
            </Button>
          </div>
        </form>
      </LaunchModalInput>
    </InitEntryContentContainer>
  );
};

export default InitEntryForm;
