const Yup = require("yup");

const userRequestValidation = Yup.object().shape({
    first_name: Yup.string()
        .required("نام الزامی است")
        .min(4, "نام نباید کمتر از 4 حرف باشد")
        .max(255, "نام خانوادگی نباید کمتر از 4 حرف باشد"),

    last_name: Yup.string()
        .required("نام خانوادگی الزامی است")
        .min(4)
        .max(255),

    email: Yup.string()
        .email("ایمیل اشتباه است")
        .required("ایمیل الزامی است"),

    password: Yup.string()
        .required("رمز عبور الزامی است")
        .min(8)
        .max(255),

    confirmation_password: Yup.string()
        .required("پسورد مطابقت ندارد")
        .oneOf([Yup.ref("password"), null]),
});

module.exports = userRequestValidation;
