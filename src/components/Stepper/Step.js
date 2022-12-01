import { forwardRef } from 'react';
import { Card } from '../Card';


const Step = ({children}) => {

    return(
        <Card.Body>
            {children}
        </Card.Body>
    )
}

export { Step };
