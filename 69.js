    <div className="row">
      {isLoading ? (
        <>Loading </>
      ) : (
        <>
          <div>
            {Array.isArray(result) &&
              result.map((item, index) => {
                return (
                  <Card
                    style={{ width: "18rem" }}
                    key={index}
                    onClick={() => selectFunction({ item })}
                  >
                    <Card.Body>
                      <Card.Title>{item.detail}</Card.Title>
                      <Card.Text>Code Order:{item.docNumber}</Card.Text>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>
                          จำนวนOrder (ลัง): {item.qty}
                        </ListGroupItem>
                        <ListGroupItem>
                          จำนวนOrder (ขวด): {item.qty * item.packing}
                        </ListGroupItem>
                      </ListGroup>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>
                          จำนวนOrder ที่ต้องผลิต คงเหลือ(ลัง):{" "}
                          {item.ctnUnitProduced === undefined
                            ? (item.ctnUnitProduced = 0)
                            : item.ctnUnitProduced ||
                              item.qty - item.ctnUnitProduced > 0
                            ? item.qty - item.ctnUnitProduced
                            : 0}
                        </ListGroupItem>
                        <ListGroupItem>
                          จำนวนOrder ที่ต้องผลิต คงเหลือ (ขวด):{" "}
                          {item.qty * item.packing - item.unitProduced > 0
                            ? item.qty * item.packing - item.unitProduced
                            : 0}
                        </ListGroupItem>
                      </ListGroup>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>
                          จำนวผลิตจริงทั้งหมด (ลัง): {item.ctnUnitProduced}
                        </ListGroupItem>
                        <ListGroupItem>
                          จำนวนผลิตจริงทั้งหมด (ขวด): {item.unitProduced}
                        </ListGroupItem>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                );
              })}
          </div>
