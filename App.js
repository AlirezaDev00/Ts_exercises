// literal vars
var item = undefined;
var num = null;
var adminLoginHandler = function (admin) {
    switch (admin.name) {
        case "Alireza": {
            return "Alireza is logged";
        }
        case "AlirezaFd": {
            return "AlirezaFd is logged";
        }
        case "MohammadAmin": {
            return "MohammadAmin is logged";
        }
        default: {
            var neverVariable = admin;
            return neverVariable;
        }
    }
};
