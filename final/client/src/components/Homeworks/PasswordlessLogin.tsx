import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { VERIFY_REQUEST, CHECK_CODE } from '../../data/mutation';

const PasswordlessLogin = ({
  onLogin,
}: {
  onLogin: (token: String) => void;
}) => {
  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');
  const [requestId, setRequestId] = useState<string | null>(null);

  const [verifyRequest] = useMutation<{
    verifyRequest: { requestId: string };
    verifyRequestVars: { number: string };
  }>(VERIFY_REQUEST, {
    onCompleted(data: { verifyRequest: { requestId: string } }) {
      setRequestId(data.verifyRequest.requestId);
    },
  });
  const [checkCode] = useMutation<{
    checkCode: { token: string };
    checkCodeVars: { requestId: string; code: string; number: string };
  }>(CHECK_CODE, {
    onCompleted(data: { checkCode: { token: string } }) {
      if (data.checkCode.token) {
        onLogin(data.checkCode.token);
      }
    },
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          number && code && requestId && checkCode({
            variables: {
              requestId,
              code,
              number
            }
          });
        }}
      >
        <div className="form-row">
          <div className="col">
            <label htmlFor="number">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="number"
              placeholder="Enter phone number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="col">
            <button
              onClick={(e) => {
                number &&
                  verifyRequest({
                    variables: {
                      number,
                    },
                  });
              }}
            >
              Request code
            </button>
          </div>
        </div>
        {requestId && (
          <>
            <div className="form-group">
              <label htmlFor="code">Code</label>
              <input
                type="text"
                className="form-control"
                id="code"
                placeholder="Enter one time code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default PasswordlessLogin;
