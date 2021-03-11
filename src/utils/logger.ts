import {addColors, createLogger, format, transports} from "winston";

const logLevel: string = process.env.LOG_LEVEL || 'info';

const logLevelSetup: any = {
    levels: {
        error: 0,
        warn: 1,
        debug: 2,
        info: 3,
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        debug: 'blue',
        info: 'green'
    }
};

const logFormat = setLogFormat(checkEnvironment());

export const logger = createLogger({
    levels: logLevelSetup.levels,
    format: logFormat,
    transports: [
        new transports.Console({
            format: logFormat,
            level: logLevel
        })
    ]
})

export function setLogFormat(env: string) {
    if (env === 'local') {
        addColors(logLevelSetup.colors);
        return format.combine(format.simple(), format.colorize());
    }
    return format.json();
}

function checkEnvironment(): string {
    return (!!process.env.ENVIRONMENT) ? process.env.ENVIRONMENT : 'local';
}
