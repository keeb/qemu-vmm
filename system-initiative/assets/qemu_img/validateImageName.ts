async function main(value: Input): Promise < Output > {
    if (value == "" || value == null) {
        return {
            valid: false,
            message: "must be set and not empty",
        };
    }
    return {
        valid: true,
        message: "woohoo",
    };
}