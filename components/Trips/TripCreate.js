import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";
import { AddIcon, Button, CheckIcon, Input, Stack, VStack } from "native-base";
import tripStore from "../../store/tripStore";

const TripCreate = () => {
  const [title, onChangeTitle] = useState(null);
  const [descreption, onChangeDescreption] = useState(null);
  const [image, setImage] = useState(null);
  const [trip, setTrip] = useState({
    title: "",
    descreption: "",
    image: "",
  });

  const handleChoosePhoto = async () => {
    // const result = await launchImageLibrary();
    // console.log(result);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    let uriParts = result.uri.split(".");
    let fileType = uriParts[uriParts.length - 1];
    let uri = result.uri;
    if (!result.cancelled) {
      setImage({ uri, name: `photo.${fileType}`, type: `image/${fileType}` });
    }
  };
  const onSubmit = () => {
    const test = {
      title: title,
      description: descreption,
      image: image,
    };
    tripStore.createTrip(test);
  };
  return (
    <View>
      <Stack space={5} alignItems="center">
        <Text>Title</Text>
        <Input
          onChangeText={onChangeTitle}
          variant="underlined"
          placeholder="Underlined"
        />

        <Text>Image</Text>
        <Button
          onPress={handleChoosePhoto}
          size="md"
          leftIcon={<Entypo name="upload" size={24} color="black" />}
          colorScheme="dark"
        >
          Upload Image
        </Button>
        <Text>Descreption</Text>
        <TextInput
          style={styles.descreptionInput}
          onChangeText={onChangeDescreption}
          value={descreption}
          placeholder="Descreption"
          keyboardType="numeric"
          multiline="true"
        />
        <Button
          onPress={onSubmit}
          size="md"
          leftIcon={<CheckIcon name="check" type="check" color="white" />}
          colorScheme="dark"
        >
          SUBMIT
        </Button>
      </Stack>
    </View>
  );
};

export default TripCreate;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  descreptionInput: {
    height: 300,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    height: 30,
    width: 20,
    backgroundColor: "blue",
  },
});
