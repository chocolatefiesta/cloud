import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SettingsForm({updateSTL, setStlSettings}) {

    return (
        <>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column >Текст</Form.Label>
                    <Col >
                        <Form.Control size="sm" type="text" defaultValue="Chocolate Fiesta" onChange={e => setStlSettings({ text: e.target.value })} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column >Высота изделия, мм</Form.Label>
                    <Col >
                        <Form.Control size="sm" type="number" step="1" defaultValue="5" onChange={e => setStlSettings({ depth: e.target.value })} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column >Размер изделия, мм</Form.Label>
                    <Col >
                        <Form.Control size="sm" type="number" step="1" defaultValue="100" onChange={e => setStlSettings({ width: e.target.value })} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column >Высота (z) подложки, мм</Form.Label>
                    <Col >
                        <Form.Control size="sm" type="number" step="10" defaultValue="2" onChange={e => setStlSettings({ foundation_depth: e.target.value })} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column >Размер подложки, мм</Form.Label>
                    <Col >
                        <Form.Control size="sm" type="number" step="0.1" defaultValue="2" onChange={e => setStlSettings({ foundation_offset: e.target.value })} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column >Ширина подложки-соединителя слов, мм</Form.Label>
                    <Col >
                        <Form.Control size="sm" type="number" step="1" defaultValue="7" onChange={e => setStlSettings({ foundation_joiner_height: e.target.value })} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column >Межбуквенное расстояние</Form.Label>
                    <Col >
                        <Form.Control size="sm" type="number" defaultValue="1.0" onChange={e => setStlSettings({ text_spacing: e.target.value })} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column >Шрифт</Form.Label>
                    <Col >
                        <Form.Control size="sm" type="text" defaultValue="Pacifico:style=Bold" onChange={e => setStlSettings({ font: e.target.value })} />
                    </Col>
                </Form.Group>
            </Form>
            <Button onClick={() => updateSTL()}>Сгенерировать</Button>
        </>
    );
}

