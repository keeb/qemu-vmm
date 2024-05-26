async function main(value: Input): Promise<Output> {
    if (value == "") {
      return {
        valid: false,
        message: "empty strings are not allowed"
      }
    }
  
    const ipPortRegex = /^(\d{1,3}\.){3}\d{1,3}:\d{1,5}$/;
  
    if (!ipPortRegex.test(value)) {
      return {
        valid: false,
        message: "Host secret is in an invalid format"
      }
    }
    return {
      valid: true,
      message: "validation error message",
    };
  }
  