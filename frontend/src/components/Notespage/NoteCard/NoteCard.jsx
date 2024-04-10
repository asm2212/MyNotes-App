import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import "./style.css";
import notebg from "../../../assets/notebg.png";
import { useDispatch } from "react-redux";
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.actions";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function NoteCard({ title, body, user, _id }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [tempTitle, setTitle] = useState(title);
  const [tempBody, setBody] = useState(body);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateNote = async () => {
    try {
      setLoading(true);
      await dispatch(updateNotes(_id, { title: tempTitle, body: tempBody }));
      onClose();
    } catch (error) {
      setError("Failed to update note. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card backgroundImage={`url(${notebg})`}>
      <CardBody>
        <VStack>
          <Heading>{title}</Heading>
          <Text>{body}</Text>

          <Flex gap={2}>
            <>
              <Button onClick={onOpen}>Update</Button>

              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Update Note</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody pb={6}>
                    <Input
                      value={tempTitle}
                      m
                      placeholder="Please enter title"
                      onChange={(e) => setTitle(e.target.value)}
                    ></Input>
                    <Textarea
                      mt={8}
                      value={tempBody}
                      placeholder={"Please enter description"}
                      onChange={(e) => setBody(e.target.value)}
                    ></Textarea>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={updateNote}
                      isLoading={isLoading}
                    >
                      Update
                    </Button>
                    <Button onClick={onClose} isDisabled={isLoading}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </>
            <Button
              onClick={() => {
                dispatch(deleteNotes(_id));
              }}
            >
              Delete
            </Button>
          </Flex>
          {error && <Text color="red.500">{error}</Text>}
        </VStack>
      </CardBody>
    </Card>
  );
}
