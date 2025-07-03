import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  loginForm: {
    backgroundColor: "white",
    padding: 10,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    gap: 10,
  },
  formElement: {
    height: 40,
    fontSize: theme.fontSizes.body,
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
  },
  input: {
    color: theme.colors.textPrimary,
    borderColor: "lightgrey",
  },
  button: {
    color: "white",
    textAlign: "center",
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
});

interface formValues {
  username: string;
  password: string;
}

const initialValues = {
  username: "",
  password: "",
};

const onSubmit = (values: formValues) => {
  console.log(values);
};

const validationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View style={[styles.container, styles.loginForm]}>
      <View>
        <TextInput
          style={[styles.formElement, styles.input]}
          placeholder="username"
          placeholderTextColor={styles.input.borderColor}
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          onBlur={() => formik.setFieldTouched("username")}
        />
        {formik.touched.username && formik.errors.username && (
          <Text color="danger">{formik.errors.username}</Text>
        )}
      </View>
      <View>
        <TextInput
          style={[styles.formElement, styles.input]}
          secureTextEntry
          placeholder="password"
          placeholderTextColor={styles.input.borderColor}
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          onBlur={() => formik.setFieldTouched("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <Text color="danger">{formik.errors.password}</Text>
        )}
      </View>
      <Pressable>
        <Text fontWeight="bold" style={[styles.formElement, styles.button]}>
          sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
