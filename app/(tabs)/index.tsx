import { Link } from "expo-router";
import { View, Text ,Image} from "react-native";

export default function HomeScreen() {
  return (
    <View className="bg-dark-primary h-full flex justify-center">
      <View className="px-3 space-y-12">
        <View className="mx-auto mb-5 ">
          <Image
          source={require('@/assets/images/pin_red(3).png')}/>
          
        </View>
        <Text className="text-white text-6xl font-extrabold mx-auto">
          welcome
        </Text>
        <Text className="text-white text-center text-lg">
        Welcome we will provide you the best delivery services ever from this app and also provide you a work without any exprerience needed
        </Text>
        <Link
          href={"/explore"}
          className="text-white font-bold text-lg w-full text-center bg-button-red py-5 rounded-full"
        >
          get started
        </Link>
      </View>
    </View>
  );
}
