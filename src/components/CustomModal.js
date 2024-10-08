
import { Button, Modal, Image } from 'react-bootstrap';


export default function CustomModal({ show, onHandleClose  }) {
       
    return(
        <>
            <Modal show={show} onHide={onHandleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="card">
                    <div class="left">
                        <Image src="https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1" alt="shoe"/>
                        <i class="fa fa-long-arrow-left"></i>
                        <i class="fa fa-long-arrow-right"></i>
                    </div>
                    <div class="right">
                        <div class="product-info">
                            <div class="product-name">
                                <h1>Airmax</h1>
                                <i class="fa fa-search"></i>
                                <i class="fa fa-user"></i>
                                <i class="fa fa-shopping-cart"></i>
                            </div>
                            <div class="details">
                                <h3>Winter Collection</h3>
                                <h2>Men Black Sneakers</h2>
                                <h4><span class="fa fa-dollar"></span>150</h4>
                                <h4 class="dis"><span class="fa fa-dollar"></span>200</h4>
                            </div>
                            <ul>
                                <li>SIZE</li>
                                <li class="bg">7</li>
                                <li class="bg">8</li>
                                <li class="bg">9</li>
                                <li class="bg">10</li>
                                <li class="bg">11</li>
                            </ul>
                            <ul>
                                <li>COLOR</li>
                                <li class="yellow"></li>
                                <li class="black"></li>
                                <li class="blue"></li>
                            </ul>
                            <span class="foot"><i class="fa fa-shopping-bag"></i>Buy Now</span>
                            <span class="foot"><i class="fa fa-shopping-cart"></i>Add TO Cart</span>
                        </div>
                    </div>
                </div>
                    
                </Modal.Body>
                <Modal.Footer>
                
                
                <Button variant="secondary" onClick={onHandleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={onHandleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}