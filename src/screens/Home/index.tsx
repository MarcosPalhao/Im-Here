import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
	const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João'];

	function handleParticipantAdd() {
		if (participants.includes("Rodrigo")) {
			return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome.");
		}
	}

	function handleParticipantRemove(name: string) {
		Alert.alert("Remover", `Remover o participante ${name}?`, [
			{
				text: 'Sim',
				onPress: () => Alert.alert("Deletado!")
			},
			{
				text: 'Não',
				style: 'cancel'
			}
		])
	}

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro</Text> 

			<View style={styles.form}>
				<TextInput
					style={styles.input} 
					placeholder="Nome do participante"
					placeholderTextColor="#6b6b6b"
				/>

				<TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<FlatList 
				data={participants}
				keyExtractor={item => item}
				renderItem={({ item }) => (
					<Participant 
						key={item}
						name={item}
						onRemove={() => handleParticipantRemove(item)} 
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text style={styles.listEmptyText}>Nínguem chegou no evento ainda? Adicione participantes a sua lista de presença</Text>
				)}
			/>
    </View>
  )
}