import { expressApp, start } from '@/app';

describe('app', () => {
  const consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation();
  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

  afterEach(() => {
    consoleInfoSpy.mockClear();
    consoleErrorSpy.mockClear();
  });

  test('starts the app without errors', () => {
    jest.spyOn(expressApp, 'listen').mockImplementationOnce(
      (_: any, listeningListener: Function | undefined) => {
        listeningListener!(false);
        return 'serverWithoutErrors' as any; // Ignore 'Server' type
      },
    );
    start();
    expect(consoleInfoSpy).toBeCalledWith('Example app listening on port 3000!');
    expect(consoleErrorSpy).not.toBeCalled();
  });

  test('starts the app and stops with the error', () => {
    const errorMessage = 'mocked error';
    jest.spyOn(expressApp, 'listen').mockImplementationOnce(
      (_: any, listeningListener: Function | undefined) => {
        listeningListener!(new Error(errorMessage));
        return 'serverWithErrors' as any; // Ignore 'Server' type
      },
    );
    start();
    expect(consoleInfoSpy).not.toBeCalled();
    expect(consoleErrorSpy).toBeCalledWith(`Unable to start app. Found error: ${errorMessage}`);
  });
});
