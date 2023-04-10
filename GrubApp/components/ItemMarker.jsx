import { View } from "react-native";
import { Marker } from "react-native-maps";

export const ItemMarker = ({ item, setIsModalVisible, setSelectedItem }) => {
  return (
    <View>
      <Marker
        title={item.name}
        coordinate={{
          latitude: item.location.coordinates[1],
          longitude: item.location.coordinates[0],
        }}
        onPress={() => {
          setSelectedItem(item);
          setIsModalVisible(true);
        }}
        pinColor="#9C0444"
      ></Marker>
    </View>
  );
};
