module.exports = {
    roots: ["<rootDir>/src"],
    preset: 'ts-jest',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        "\\.(scss|sass|css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/styleMock.js"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
