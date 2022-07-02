      // ------------------------- On_Air_Status -------------------------------------
      if (items[i].On_Air_Status) {
        if (items[i].On_Air_Status === 'Completed' && items[i].On_Air_Date) {
          setSuccessMessage('Your Excell is ready to upload !');
        } else if (items[i].On_Air_Status === 'Completed' && !items[i].On_Air_Date) {
          setMobilizationStatusError('On_Air_Status error !');
          setvalidationErrorMessage(
            'Invalid On_Air_Status format. Please add On Air Completed date !'
          );
          setTimeout(() => {
            setvalidationErrorMessage('');
          }, 6000);
        }
      } else {
        setSuccessMessage('Your Excell is ready to upload !');
      }