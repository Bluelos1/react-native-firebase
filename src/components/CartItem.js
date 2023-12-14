import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CartItem = ({ item, onRemove, onAddQuantity, onSubtractQuantity }) => (
  <View style={styles.card}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{`${item.price} zł`}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => onSubtractQuantity(item.id)} style={styles.quantityButton}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => onAddQuantity(item.id)} style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
    <TouchableOpacity onPress={() => onRemove(item.id)} style={styles.removeButton}>
      <Text style={styles.removeButtonText}>Usuń</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    margin: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 16,
  },
  removeButton: {
    padding: 5,
    backgroundColor: '#ff4444',
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default CartItem;
