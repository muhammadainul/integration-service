require('dotenv').config();

module.exports = {
    development: {
        myConfig: {
            sessionSecret: "P@ssw0rd#123S1f1gT0k3n",
            refreshSessionSecret: "topSecret!",
            expiredSessionTime: "24h",
            expiredRefreshSessionTime: "24h"
        }
    },
    test: {
        myConfig: {
            sessionSecret: "P@ssw0rd#123S1f1gT0k3n",
            refreshSessionSecret: "topSecret!",
            expiredSessionTime: "24h",
            expiredRefreshSessionTime: "24h"
        }
    },
    production: {
        myConfig: {
            sessionSecret: "P@ssw0rd#123S1f1gT0k3n",
            refreshSessionSecret: "topSecret!",
            expiredSessionTime: "24h",
            expiredRefreshSessionTime: "24h"
        }
    }
}   