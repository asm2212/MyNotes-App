import { Button,Card, CardBody,Flex, Heading,VStack ,Text} from "@chakra-ui/react";
import "./style.css"

export default function NoteCard({title,body,user,_id}){
    return <Card className="card" w={200} h={200}>
        <CardBody>
            <VStack>

                <Heading>{title}</Heading>
                <Text>{body}</Text>

                <Flex>
                    <Button>Update</Button>
                    <Button>Delete</Button>
                </Flex>

            </VStack>
        </CardBody>
    </Card>
}